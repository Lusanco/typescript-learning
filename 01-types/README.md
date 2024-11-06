# Types, Annotations, Assertions, and Inference

The scripts explores key TypeScript features such as type annotations, type assertions, and type inference, while covering best practices for handling types in variables, functions, objects, classes, interfaces, tuples, and arrays.

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

5. **`tuples.ts`**

Demonstrates tuples and type aliases for grouping multiple values with specific types.

**Defining a type alias and using it in tuples:**

```typescript
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
```

**Tuple and object comparison:**

```typescript
const carSpecs: [number, number] = [400, 3354];
const carStats = { horsepower: 400, weight: 3354 };
```

6. **`interfaces.ts`**

Covers interfaces for defining structures and implementing them in functions.

**Defining an interface:**

```typescript
interface Reportable {
  summary(): string;
}
```

**Using interfaces in functions:**

```typescript
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
```

7. **`arrays.ts`**

Shows array handling, type inference, and flexible types.

**Array declaration with inferred types:**

```typescript
const carMakers = ["ford", "toyota", "chevy"];
```

**Multidimensional arrays:**

```typescript
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];
```

**Flexible types with unions:**

```typescript
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
```

8. **`classes.ts`**

Introduces classes with inheritance, access modifiers, and method overriding.

**Class declaration with a constructor:**

```typescript
class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}
```

**Class inheritance and access modifiers:**

```typescript
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
```

## Key Concepts

- **Type Annotations**: Explicitly define types for variables, function parameters, and return values to enhance code clarity.

- **Type Inference**: Automatically infers types based on assigned values, reducing the need for explicit annotations.
- **Type Assertions**: Allows overriding inferred types when we know more about a value's type, such as with JSON data.
- **Union Types**: Useful for variables that may hold multiple types, offering type flexibility and safety.
- **Void and Never Types**:
  - **`void`:** For functions that return no value.
  - **`never`:** For functions that will not return, like those that throw errors.
- **Tuples:** Ordered lists with fixed types for each element, enhancing structure for grouped values.
- **Interfaces:** Used to define the structure of objects and enforce consistent properties or methods across different implementations.
- **Classes:** Allows object-oriented programming with inheritance, access control, and encapsulation.
