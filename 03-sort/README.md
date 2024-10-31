# TypeScript Bubble Sort Project

This project demonstrates the implementation of a Bubble Sort algorithm in TypeScript for various data types, including arrays of numbers, strings, and linked lists. The project highlights two important design patterns: using interfaces versus abstract classes to achieve type safety, flexibility, and code reusability. This allows the same sorting logic to apply across multiple data structures by defining a common contract for sorting behaviors.

## Project Overview

The Bubble Sort implementation sorts:

- **Numbers**: An array of numbers.
- **Characters**: A string treated as an array of characters.
- **Linked List**: A linked list of nodes.

Each of these data structures adheres to a sorting contract via either an interface or an abstract class.

## Key Concepts

**Interface vs. Abstract Class**

- **Interface**: Initially, an interface was used to ensure each data structure had `compare` and `swap` methods, as well as a `length` property.
- **Abstract Class** (`Sorter`): Eventually, an abstract class was implemented to provide the shared sort logic. This approach ensures that each data structure contains the required methods but avoids duplicating the sorting logic across different implementations.

**When to Use Interfaces vs. Abstract Classes**

- **Interface**: Use when defining a contract that multiple classes will implement but do not share any specific functionality.
- **Abstract Class**: Use when defining a base class that will share methods or properties across subclasses, as with the sort method in this project.

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

## Code Structure

**`Sorter.ts`**

The abstract class `Sorter` defines the `sort` method, providing the core sorting logic. Each subclass implements the necessary `compare` and `swap` methods.

**`NumbersCollection.ts`**

Implements a `NumbersCollection` class that extends `Sorter`. It sorts an array of numbers.

**`CharactersCollection.ts`**

Implements a `CharactersCollection` class that extends `Sorter`. It sorts characters in a string, ignoring case.
 
**`LinkedList.ts`**

Implements a `LinkedList` class that extends `Sorter`, allowing sorting on a linked list of nodes.

**`index.ts`**

The main entry point to demonstrate sorting of each collection type.

## How to Use

- **Numbers**: Sorts an array of numbers in ascending order.
- **Characters**: Sorts characters in a string alphabetically, case-insensitive.
- **LinkedList**: Sorts elements in a linked list, printing each node's data after sorting.

Run `index.ts` to see each sorting functionality in action. Each collection's `sort` method is called, which utilizes the Bubble Sort algorithm defined in `Sorter.ts`.

This approach provides a reusable and modular Bubble Sort implementation adaptable to various data types, showcasing TypeScript's type safety and flexible class structures.