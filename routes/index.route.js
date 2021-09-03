const express = require("express");
const app = express();
const blogRoute = require("./blog.route");
const userRoute = require("./user.route");
const productRoute = require("./product.route");


app.use("/blog" , blogRoute )

app.use("/user" , userRoute )

app.use("/product" , productRoute )

module.exports = app;

