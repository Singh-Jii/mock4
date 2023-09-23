const express = require("express");

const { my_connect } = require("./config/db");
require("dotenv").config();
const { my_books_router } = require("./routers/books_router");
const cors = require("cors");

const my_application = express();
my_application.use(cors());

my_application.use(express.json());



my_application.get("/", async (request, response) => {
  response.status(201).send("Landing Page");
});


my_application.use("/books", my_books_router);


my_application.listen(process.env.port, async (request, response) => {
  try {
    await my_connect;
    console.log("Connected to the db");
  } 
  catch (er) {
    console.log("Fail to connect to db");
    console.log(er);
  }
  console.log(`${process.env.port}`);
});
