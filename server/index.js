const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");

const app = express();

// connect to database
connectDB();

// Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
