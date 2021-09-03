const app = require("express");
const route = app.Router();
const { deleteBlogCntrl , addNewBlogCntrl , listOfAllBlogCntrl , getBlogDetailCntrl } = require("../controllers/blog.controller")
// const { listOfAllBlogCntrl } = require("../controllers/blog.controller")

route.get("/listOfAllBlog" , listOfAllBlogCntrl );
route.post("/addNewBlog", addNewBlogCntrl );
route.delete("/deleteBlog/:id" , deleteBlogCntrl);
route.post("/UpdateBlogDetail", );
route.get("/getBlogDetail/:id" , getBlogDetailCntrl)
module.exports = route;