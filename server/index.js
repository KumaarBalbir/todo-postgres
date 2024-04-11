const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());

// get client side data from body in json format
app.use(express.json()); // req.body

// Routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

// delete a todo

// start server
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
