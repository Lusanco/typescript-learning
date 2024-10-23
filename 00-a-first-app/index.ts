import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: Boolean;
}

axios.get(url).then((response) => {
  const todo: Todo = response.data;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    `);
});
