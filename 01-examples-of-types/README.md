# Types, Annotations, Assertions, and Inference

The scripts explores key TypeScript features such as type annotations, type assertions, and type inference. As the best practices for working with types in variables, functions, objects, and classes.

## Files Overview
1. **`types.ts`**

This file introduces the use of TypeScript's type inference and simple object typing.

**Type inference in variables:**
```typescript
const today = new Date();
today.getMonth(); // Inferred type: Date
```

**Simple object typing:**
```typescript
const person = {
  age: 20, // Inferred type: { age: number }
};
```
**Class instantiation:**

```typescript
class Color {}
const red = new Color(); // Inferred type: Color
```

2. **`functions.ts`**

This file covers function annotations, including parameter types, return types, and different function declaration styles.

**Arrow function with parameter and return types:**

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
```

**Function declaration with return type annotation:**

```typescript
function divide(a: number, b: number): number {
  return a / b;
}
```

**Void return type for functions that do not return a value:**

```typescript
const logger = (message: string): void => {
  console.log(message);
};
```

**Never return type for functions that throw errors:**

```typescript
const throwError = (message: string): never => {
  throw new Error(message);
};
```

**Destructuring with type annotations in function parameters:**

```typescript
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
```

3. **`variables.ts`**

This file demonstrates how to declare variables with explicit types, as well as TypeScript's ability to infer types.

**Basic variable annotations:**

```typescript
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
```

**Working with arrays:**

```typescript
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
```

**Object literal with type annotations:**

```typescript
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
```
**Special cases for any type:**

```typescript
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
```

**Union types for variables that can hold multiple types:**

```typescript
let numberAboveZero: boolean | number = false;
```
4. **`objects.ts`**

This file highlights object destructuring and method typing with TypeScript.

**Destructuring with explicit types:**

```typescript
const { age, name }: { age: number; name: string } = profile;
```

**Nested destructuring with type annotations:**

```typescript
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

## Key Concepts

- **Type Annotations**: Allow developers to explicitly specify the types for variables, function parameters, and return values. They improve code clarity and catch potential errors early.
- **Type Inference**: TypeScript automatically infers the type based on the value assigned to a variable, reducing the need for explicit type annotations in some cases.
- **Type Assertions**: Let us override TypeScript's inferred types in situations where we know more about a value's type, such as when working with data from JSON.parse().
- **Union Types**: Used when a variable may hold values of multiple types, enhancing flexibility while maintaining type safety.
- **Void and Never Types**:
  - **`void`** is used for functions that don't return anything.
  - **`never`** is used for functions that will not return (e.g., functions that throw errors).
