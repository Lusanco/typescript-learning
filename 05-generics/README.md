# Generics and Constraints

This TypeScript project demonstrates how to use Generics to build flexible, reusable classes and functions for handling collections of different types. Additionally, it covers Generic Constraints to enforce specific requirements on generic types, allowing for more controlled, type-safe code.

## Project Highlights

### Key Topics Covered

1. **Generic Classes:**
   - **`ArrayOf`**: A generic class that can handle collections of any type. 
   - By defining **`ArrayOf<T>`**, we created a reusable class that can store and retrieve elements of any specified type, avoiding redundancy and promoting cleaner code.
   - Compared to **`ArrayOfNumber`** and **`ArrayOfStrings`**, which are hardcoded for specific types, **`ArrayOf<T>`** leverages generics for flexibility.

2. **Generic Functions**:
   - **`printAny<T>`**: A generic function that logs each element of any type of array.
   - Provides a more adaptable approach compared to type-specific functions like **`printStrings`** and **`printNumbers`**.
   - Generic functions allow for dynamic type definition, which enhances code reusability and type safety.

3. **Generic Constraints**:
   - By creating a constraint with the **`Printable`** type, we enforce that any type used in **`printHousesOrCars`** must implement a print method.
   - **`printHousesOrCars<T extends Printable>`** demonstrates how constraints on generics can restrict types to those that meet certain criteria (in this case, having a print method).
   - This approach allows for flexibility while ensuring that required functionality is present.

## Code Structure

- ### Class-Based Collection Handling:
  - **`ArrayOfNumber`** and **`ArrayOfStrings`** for type-specific collections.
  - **`ArrayOf<T>`** is a generic alternative that works with any type, reducing code duplication.

- ### Generic Functions:
  - Functions **`printStrings`** and **`printNumbers`** illustrate type-specific handling.
  - **`printAny<T>`** is a versatile, type-safe function that can log elements of any array, demonstrating the power of generics.

- ### Generic Constraints:
    - **`Printable`** type (an interface or type alias) is used to ensure that types used in **`printHousesOrCars`** have a print method.
    - This constraint enables us to apply **`printHousesOrCars`** to classes like **`Car`** and **`House`** but not to types that lack the required method.

## Code Examples

**1. Creating and Using Generic Classes:**
```typescript
const arr = new ArrayOf(["a", "b", "c"]); // ArrayOf<string>
console.log(arr.get(0)); // Output: "a"
```

**2. Printing Elements with Generic Functions:**
```typescript
printAny<number>([1, 2, 3]); // Prints: 1, 2, 3
printAny<string>(["a", "b", "c"]); // Prints: "a", "b", "c"
```

**3. Using Generic Constraints:**
```typescript
printHousesOrCars<House>([new House(), new House()]); // Prints: "I am a house"
printHousesOrCars<Car>([new Car(), new Car()]); // Prints: "I am a car"
```

## Benefits of Generics and Constraints
- Generics allow for greater code flexibility, reducing the need for repetitive, type-specific implementations.
- Constraints provide a way to enforce specific methods or properties on generic types, giving us control over what types can be used while maintaining flexibility.

This project serves as a hands-on introduction to using generics and constraints in TypeScript to create highly reusable, type-safe code. Generics and constraints are powerful tools for building maintainable, adaptable applications, especially when handling collections and enforcing type requirements.