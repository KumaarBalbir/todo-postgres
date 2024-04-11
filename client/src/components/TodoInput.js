import React, { Fragment, useState } from "react";

const TodoInput = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/"; // refreshes the page once the todo is added
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Todo List App</h1>

      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success mx-2">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoInput;
