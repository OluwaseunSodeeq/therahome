import React, { useState } from "react";

// primitives
const firstname: string = "John Doe";
const year: number = 28;
const isDeveloper: boolean = true;

const primitiveSentence: string = `My name is ${firstname}, I am ${year} years old and I am ${isDeveloper ? "a developer" : "not a developer"}.`;
console.log(primitiveSentence);

// Annotation Free
const freeVariable = "I can be anything!";
console.log(freeVariable);

// Functions
function addition(a: number, b: number): number {
  return a + b;
}
const res1 = addition(5, 10); //This function must return number
console.log(`The result of addition is: ${res1}`);

// Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["Hello", "World"];
const mixed: (string | number)[] = [1, "Two", 3, "Four"];
console.log(numbers, strings, mixed);

// Objects
const user: { name: string; age: number; isAdmin: boolean } = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
console.log(user);

const product: { title: string; price: number; isStock: boolean } = {
  title: "Laptop",
  price: 999.99,
  isStock: true,
};
console.log(product);

function GreetUsers(name: string): string {
  return `Hello ${name}, welcome to TypeScript!`;
}
console.log(GreetUsers("Monday"));

function GreetUser({ name, age }: { name: string; age: number }) {
  return `Hello ${name}, you are ${age} years old, right?`;
}
console.log(GreetUser({ name: "Micheal", age: 33 }));

type UserCardProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const userDtails: UserCardProps = {
  name: "yusuff",
  age: 35,
  isAdmin: true,
};

console.log(userDtails);
function UserCard({ name, age, isAdmin }: UserCardProps) {
  return `User: ${name}, Age: ${age}, Admin: ${isAdmin ? "Yes" : "No"}`;
}
console.log(UserCard({ name: "Sarah", age: 25, isAdmin: true }));

// Optional properties ?
type OptionalUser = {
  name: string;
  age?: number; //age is optional
};
const optionaluser: OptionalUser = {
  name: "Alfa",
  // since age is optional it will not return undefined
};
console.log(optionaluser);

// Literal type ?
type Theme = "light" | "dark";

const mode: Theme = "dark";
// const mode: Theme = "blue"; is invalid
console.log(mode);

// Narrowing:
function printId(id: number | string) {
  if (typeof id === "string") return id.toUpperCase();
  return id;
}
console.log(printId("asdf123"));

type Employee = {
  name: string;
  role: string;
  salary?: number;
};

const bagcoEmployee: Employee = {
  name: "Engr. Kola",
  role: "Electrical engineer",
  salary: 200000,
};

const morpackEmployee: Employee = {
  name: "Engr. Kola",
  role: "Electrical engineer",
};
console.log(bagcoEmployee, morpackEmployee);

function formatValue(input: string | number) {
  if (typeof input === "number") return input.toFixed(2);
  return input.toUpperCase();
}
console.log(formatValue(90000), formatValue("hello typescript"));

let apiResponse: unknown;
if (typeof apiResponse === "string") {
  console.log(apiResponse.toUpperCase());
}
console.log(typeof apiResponse);

// tuple type: exact positions + exact values
type ProductsTuple = ["Orange", "Banana", "Apple"];
const productTuple: ProductsTuple = ["Orange", "Banana", "Apple"];
// Array

type ProductsInArray = {
  name: string;
  price: number;
  inStock: boolean;
};
const productArray: ProductsInArray[] = [
  { name: "Orange", price: 1.2, inStock: true },
  { name: "Banana", price: 0.8, inStock: false },
  { name: "Apple", price: 1.5, inStock: true },
];

type CarItem = ["Toyota", "Honda", "Ford"];
const carArray: CarItem = ["Toyota", "Honda", "Ford"];
console.log(productArray, productTuple, carArray);

// Optional Chaining (?.)
const optinalnewUser = {
  name: "Yusuf",
  age: 35,
};
// optinalnewUser?.profile?.avatar
console.log(optinalnewUser?.name); // Output: "Yusuf"

// Enum
enum Role {
  ADMIN,
  USER,
  MODERATOR,
}
const userRole: Role = Role.ADMIN;
console.log(userRole); // Output: 0 (the index of the enum value)

// Readonly properties
type ReadonlyUser = {
  name: string;
  readonly age: number;
};
const readonlyUser: ReadonlyUser = {
  name: "Yusuf",
  age: 35,
};
// readonlyUser.age = 36; // Error: Cannot assign to 'age' because it is a read-only property
console.log(readonlyUser);

type ProfileCardProps = {
  name: string;
  email: string;
  isVerified: boolean;
};

function ProfileCard({ name, email, isVerified }: ProfileCardProps) {
  return `Name: ${name}, Email: ${email}, Verified: ${isVerified ? "Yes" : "No"}`;
}

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  label: string;
  variant: ButtonVariant;
  onClick?: () => void;
};
function Button({ label, variant }: ButtonProps) {
  return `Button: ${label}, Variant: ${variant}`;
}

type UserSocailaHandle = {
  name: string;
  profile: {
    social: {
      twitter: string;
      linkedin: string;
    };
  };
};

const userSocialHandle: UserSocailaHandle = {
  name: "Yusuf",
  profile: {
    social: {
      twitter: "@yusuf",
      linkedin: "linkedin.com/in/yusuf",
    },
  },
};
console.log(userSocialHandle?.profile?.social?.twitter); // Output: "@yusuf"

type AdminUser = {
  name: string;
  readonly email: string;
  role: "admin" | "user" | "moderator";
};

const admin: AdminUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "admin",
};

console.log(admin);

let thisResponse: unknown;

if (
  typeof thisResponse === "object" &&
  thisResponse !== null &&
  "name" in thisResponse &&
  typeof thisResponse.name === "string"
) {
  console.log(thisResponse.name.toUpperCase());
}

//   Typing Props
type ComponentProps = {
  children: React.ReactNode;
};

export function TopLevelDiv({ children }: ComponentProps) {
  // Typing State
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [currUser, setCurrUser] = useState<UserCardProps | null>(null);

  // Typing Events
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrUser(user);
    setUsers((prevUsers) => [...prevUsers, user]);
    setCount(() => e.target.value.length + 1);
  }
  console.log(count, users, currUser, handleInputChange);

  // Generic Type
  function wrapInArray<T>(arg: T): T[] {
    return [arg];
  }
  console.log(wrapInArray<string>("Hello"));
  console.log(wrapInArray<number>(123));

  return React.createElement(
    "div",
    null,
    `Count: ${count}, User: ${currUser?.name || "No user selected"}`,
    children,
  );
  // <div>
  //   <h1>Count: {count}</h1>
  //   <h1>User: {currUser?.name || "No user selected"}</h1>
  //   <Button label="Add User" variant="primary" onClick={() => handleInputChange({ name: "Alice", age: 30, isAdmin: false })} />
  // </div>
  //   )
}

type Post = {
  id: number;
  title: string;
  content: string;
};

async function fetchUserData(): Promise<Post[]> {
  const response = await fetch("/api/products");
  const data: Post[] = await response.json();
  return data;
  //     return new Promise((resolve) => {
  //         setTimeout(() => {
  //             resolve({ name: "Alice", age: 30, isAdmin: false });
  //         }, 1000);
  // }
}

console.log(fetchUserData());
type Post1 = {
  id: number;
  title: string;
  content: string;
};

type ApiResponse<T> = {
  data: T;
  success: boolean;
  error: string | null;
};

// type UserResponse = ApiResponse<UserCardProps>;

// type PostResponse = ApiResponse<Post[]>;

function apiResponseHandler<T>(response: ApiResponse<T>) {
  if (response.success) {
    return response.data;
  }
  throw new Error(response.error || "An unknown error occurred");
}
console.log(
  apiResponseHandler<Post1[]>({
    data: [{ id: 1, title: "Post 1", content: "Content of post 1" }],
    success: true,
    error: null,
  }),
);

const fetchPosts = async (): Promise<Post1[]> => {
  try {
    const response = await fetch("/api/posts");
    const data: Post1[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
console.log(fetchPosts());

function handleApiResponse<T>(response: ApiResponse<T>) {
  try {
    if (!response.success) {
      throw new Error(response.error || "An unknown error occurred");
    }

    const data = response.data;
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
console.log(
  handleApiResponse<Post1[]>({
    data: [{ id: 1, title: "Post 1", content: "Content of post 1" }],
    success: true,
    error: null,
  }),
  handleApiResponse<UserCardProps>({
    data: { name: "Alice", age: 30, isAdmin: false },
    success: true,
    error: null,
  }),
  handleApiResponse<Post1[]>({
    data: [],
    success: false,
    error: "Failed to fetch posts",
  }),
);
// Exporting the components
export { ProfileCard };
export { Button };
