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

**API Overview**:

We will be fetching data from a fake API that provides testing data. Specifically, we will retrieve a single To-Do item from the endpoint.

**Project Setup**:

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

**API Request**: We will use Axios to fetch a single To-Do item from the fake API. The full URL will look like this:
- [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1).

**Bug Introduction (Intentional)**: During development, we will accidentally introduce one or two bugs in our code. TypeScript will help catch these errors while we write the code, showcasing its powerful error-checking capabilities.

**Code Editor Setup**: After setting up the project, open your code editor and ensure the package.json file and node_modules folder are present.