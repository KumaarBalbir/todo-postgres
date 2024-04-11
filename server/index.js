const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());

// get client side data from body in json format
app.use(express.json());

// start server
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
