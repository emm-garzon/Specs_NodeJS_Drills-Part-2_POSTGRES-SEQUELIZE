// Add your .env values to the global process.env object using the dotenv confiuration method.

require("dotenv").config();

// Grab the PORT value from the process.env object and save it to the variable port.

const port = process.env.PORT || 3035;

// Save the express package equal to the variable express. Then invoke express and save the result to the variable app.

const express = require("express");
const app = express();

const { getInputs, createInput } = require("./controller.js");

// Using express’s middleware method invoke the following express.json().

app.use(express.json());

// Require the cors package and save it to the variable cors. Using express’s middleware method invoke cors.

const cors = require("cors");
app.use(cors());

// In index.js, write a get endpoint that will send the user information from the database. The endpoint should be /api/info.

// Back in index.js, write a post endpoint (also at /api/info) for the user to be able to save information to the database.

app.get("/api/info", getInputs);
app.post("/api/info", createInput);

// Use the .listen method to listen for requests.
app.listen(port, () => {
  console.log(`Server running on port: ${port}!`);
});
