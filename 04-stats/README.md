# Data Handling and Design Patterns

This TypeScript project explores key concepts in data handling and TypeScript's design patterns through a CSV parsing application. The project demonstrates efficient use of Enums, Tuples, Generics, and both Inheritance and Composition patterns, providing a clear, practical comparison between these approaches.

## Project Highlights

### Key Topics Covered

1. **`Enums`**:
   - Created to define ``MatchResults`` for clarity and consistency across the project.
   - Enums are helpful for representing a closely related set of values without additional intrinsic meaning, primarily serving to improve code readability and communicate intentions clearly.

1. **`Tuples`**:
   - Used to describe a row in a CSV file, with each field in a specific order.
   - Converting raw CSV data into typed tuples ensures type safety, but requires manual conversion of data types.

1. **`Generics and Abstract Classes`**:
   - An abstract class `CSVFileReader` is implemented as a generic class for greater flexibility. Generics allow the class to work with various types without sacrificing type safety.
   - This approach treats the generic type (`T`) like a placeholder for types, allowing `CSVFileReader` to adapt dynamically based on the type provided.

1. **`Inheritance`**:
   - The `MatchReader` class extends `CSVFileReader`, leveraging inheritance to pass down `CSVFileReader` functionality. Here, we set specific types for `MatchReader`, taking advantage of generics.
   - This setup demonstrates inheritance as a means to create new, type-safe classes by extending the base functionality of existing classes.

1. **`Composition`**:
   - Composition is used to give `MatchReader` a `DataReader` that can read from any data source, such as a CSV file, an API, or user input.
   - This setup allows `MatchReader` to focus on transforming incoming data into a specific format (using tuples), while the `DataReader` manages data retrieval.
   - Another example of composition is in the `Summary` class, demonstrating how different components can work together without relying on a strict inheritance hierarchy.

## File Structure
- **`Enums`**: Defined for `MatchResults` to keep related values clear and consistent.
- Tuples: Used to define a single CSV row with ordered types.
- **`Abstract Classes and Generics`**: `CSVFileReader` as a generic, abstract class, showing inheritance with `MatchReader`.
- **`Composition Examples`**: `MatchReader` and `Summary`, which utilize composition over inheritance to handle data loading and transformation flexibly.

## Project Files

- **`CSVFileReader.ts`**: Defines a generic class to read and process CSV files. Demonstrates how generics enable flexible class configuration.
- **`MatchReader.ts`**: Inherits from `CSVFileReader` and uses composition to load match data from a CSV file and convert it into a consistent tuple format.
- **`Summary.ts`**: Uses composition for various reporting functions, serving as an example of separation of concerns and modular design.

## When to Use Inheritance vs. Composition

- **`Inheritance`**: Use when extending shared functionality across closely related classes. It’s a good choice for classes with a clear "is-a" relationship.
- **`Composition`**: Preferred for combining flexible, interchangeable behaviors. Ideal for a “has-a” relationship, where a class depends on functionalities provided by other classes but maintains independence from their internal details.

## Project Setup

1. Clone the repository and navigate to the project directory.
2. Install dependencies:
```bash
npm install
```
3. Run Project && Compile TypeScript:
```bash
npm run start
```
 
This project offers a hands-on introduction to structuring complex applications with TypeScript's powerful features, such as Enums, Tuples, Generics, and more advanced design patterns like Inheritance and Composition. These concepts enable you to build highly maintainable and flexible code structures suitable for various data-handling scenarios.