const app = require("express");
const route = app.Router();
const { addNewProductCntrl } = require("../controllers/product.controller")

route.get("/listOfAllProduct" , );
route.post("/addNewProduct", addNewProductCntrl );
route.get("/deleteProduct" , );
route.post("/UpdateProductDetail", );

module.exports = route;