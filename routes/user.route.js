const app = require("express");
const route = app.Router();
const { addNewUserCntrl } = require("../controllers/user.controller")

route.get("/listOfAllUser" , );
route.post("/addNewUser", addNewUserCntrl );
route.get("/deleteUser" , );
route.post("/UpdateUserDetail", );

module.exports = route;