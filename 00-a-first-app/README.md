# A First App

Simple TypeScript project that demonstrates how to make a network request to an external API using Axios in TypeScript. It highlights TypeScript's ability to catch errors during development, helping prevent issues from reaching runtime.

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

We will fetch data from a fake API that provides test data. Specifically, we will retrieve a single To-Do item from the following endpoint:

- [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)

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

4. **Bug Introduction (Intentional)**: During development, we intentionally introduce a bug by incorrectly capitalizing the property names (ID, Title, and Finished). This causes the program to print undefined for each of these properties when run:
```bash
    The Todo with ID: undefined
    Has a title of: undefined
    Is it finished? undefined
```

5. **Extracting console.log into a Helper Function**:

In the project, we want to extract the console.log statement into a separate helper function to keep the promise body more compact. Here's how we can do it:
- First, define a new function called logTodo as an arrow function.
- The function takes the ID, title, and completed properties as arguments.
- Then, cut and paste the console.log statement inside this new function, and replace the original statement with a call to logToDo.

```typescript
const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with id: ${id}
  Has a title of: ${title}
  Is it completed? ${completed}`);
};
```
6. **Debugging the Order of Arguments**:

Initially, if we pass the arguments in the wrong order (like ID, completed, title), the program will display incorrect information:
```bash
Has a title of false
Is it finished? delectus aut autem
```

To fix this, we need to carefully check the argument order and ensure they match the expected order (ID, title, completed).

7. **Fixing Bugs with TypeScript**: TypeScript helps us catch errors by providing warnings when we pass arguments in the wrong order. To enhance the debugging process:

- Add type annotations to the logToDo function:
```typescript
const logTodo = ({ id, title, completed }: Todo) => {
  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    `);
};
```
- Once we apply these annotations, TypeScript will show a red underline if there's a mismatch in the argument types. For example, if we try to pass completed (a boolean) where title (a string) is expected, TypeScript will alert us.

8. **Correcting the Code**: After fixing the order of arguments and updating the code with the correct property names, the program now prints the correct To-Do information when executed.

2. **Output**: 

After fixing the errors, the program correctly prints the fetched To-Do item, demonstrating how TypeScript helps catch errors early during development:

```bash
The Todo with ID: 1
Has a title of: delectus aut autem
Is it finished? false
```

10. **Why TypeScript?**:

These examples demonstrate why TypeScript is useful:

- TypeScript helps catch common errors, such as incorrect property names or argument orders, before the code is executed.
- Without TypeScript, we would have to rely on runtime checks, which is inefficient from a developer perspective.
- By using TypeScript appropriately, we can catch these mistakes during development, saving time and reducing potential bugs.

## Conclusion

**This project illustrates TypeScript's core benefit**: catching errors during development rather than at runtime. By using TypeScript's type-checking, we prevent common issues like typos in object properties or incorrect function argument orders. This leads to a smoother, safer, and more efficient coding process.