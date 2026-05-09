import * as React from "react";
import { TopLevelDiv } from "./typeClass";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function MyComponent() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    console.log("Component mounted");
  }, []);

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data: User[] = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  // useRef typing example
  const inputRef = React.useRef<HTMLInputElement>(null);
  const focusInput = () => inputRef.current?.focus();

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("input", { ref: inputRef }),
    React.createElement("button", { onClick: focusInput }, "Focus"),
    React.createElement("div", null, `Users: ${users.length}`),
    React.createElement(TopLevelDiv, null),
  );
}

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function List<T>({ items, renderItem }: ListProps<T>) {
  return React.createElement(
    "ul",
    null,
    items.map((item, index) =>
      React.createElement("li", { key: index }, renderItem(item)),
    ),
  );
}
/*
Next major concepts:

useEffect typing
useRef typing
Context API typing
Custom hooks typing
Generic React components
Utility types
Partial / Pick / Omit
Record type
Discriminated unions
Zod validation
Form typing
React Query typing
*/
