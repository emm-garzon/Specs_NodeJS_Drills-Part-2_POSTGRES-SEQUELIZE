// # Install sequelize, pg, and pg-hstore and set up the connection to your database in your controller file.

require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// In your controller file, write the handler function that will run when that endpoint is hit.

// Write the appropriate handler function in your controller file.

module.exports = {
  getInputs: (req, res) => {
    sequelize
      .query(`select * from input;`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  createInput: (req, res) => {
    let { text } = req.body;

    sequelize
      .query(`insert into input (text) values ('${text}');`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
};
