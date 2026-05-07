// primitives
const username: string = "John Doe";
const age: number = 28;
const isAdmin: boolean = true;

const primitiveSentence: string = `My name is ${username}, I am ${age} years old and I am ${isAdmin ? "an admin" : "not an admin"}.`;
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
