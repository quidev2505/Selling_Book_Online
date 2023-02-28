//Import Library
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/authentication");
const productRoute = require("./routes/product");
require("dotenv").config();

const app = express();

//Connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connect Database success !");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(cors());
app.use(express.json());

//Router
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

//Run Server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});
