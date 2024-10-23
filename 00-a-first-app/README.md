# A First App

**Fetch JSON - Simple TypeScript Project**: This project is a simple TypeScript application that demonstrates how to make a network request to an external API using Axios. It highlights TypeScript's ability to catch errors during development rather than runtime.

## Project Overview

**The goal of this project is to**:

- Fetch data from an fake API.
- Display a single To-Do item in the terminal.
- Demonstrate how TypeScript catches errors during development, providing insight into its typical workflow.

## Technologies Used

**TypeScript**: To demonstrate its workflow and error-handling capabilities.
**Axios**: For making network requests to the API.
**Node.js & NPM**: For managing dependencies.

## Project Flow

1. **API Overview**:

We will be fetching data from a fake API that provides testing data. Specifically, we will retrieve a single To-Do item from the endpoint.

2. **Project Setup**:

Create a new directory for the project:
```bash
mkdir 00-a-first-app
cd 00-a-first-app
```

Initialize the project:
```bash
npm init -y
```

Install TypeScript && @types/node:
```bash
npm install -g typescript
npm install @types/node  --save-dev
```

Install Axios:
```bash
npm install axios
```

3. **API Request**: We will use Axios to fetch a single To-Do item from the fake API. The full URL will look like this:
- [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1).

4. **Bug Introduction (Intentional)**: During development, we accidentally introduce a bug by incorrectly capitalizing the property names (ID, Title, and Finished). This causes the program to print "undefined" for each of these properties when run.
```bash
    The Todo with ID: undefined
    Has a title of: undefined
    Is it finished? undefined
```

5. **Fixing Bugs with TypeScript**: TypeScript helps us catch errors before running the program by alerting us of mismatched property names (like ID instead of id, or Finished instead of completed). Here's how TypeScript helps:
- Define an interface to describe the structure of the object we expect to receive.
- Use the as keyword to cast the response data to that interface, allowing TypeScript to validate the object properties.

6. **Adding TypeScript Interface**: We added the following interface to define the structure of the To-Do item:

```typescript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```
By using this interface, TypeScript flagged the incorrect property names (ID, Title, Finished) and suggested corrections.

7. **Updating Code**: After correcting the property names, we updated the code to use the correct names (id, title, completed). This allowed the program to print the correct To-Do information when executed.

8. **Output**: After fixing the errors, the program correctly prints the fetched ToDo item, demonstrating how TypeScript helps catch errors before runtime.

## Conclusion

**This project demonstrates the core benefit of using TypeScript**: catching errors during development rather than at runtime. TypeScript provides immediate feedback through type annotations and validations, allowing for a smoother and safer coding process.