import React, { Fragment, useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos"); // default fetch makes GET request
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  // call the getTodos function when the page renders
  useEffect(() => getTodos, []);

  return (
    <Fragment>
      <table className="table table-hover mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TodoList;
