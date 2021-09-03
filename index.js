const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const mainRoute = require("./routes/index.route")

const db = require("./config/database");
console.log(db);
const app = express();
// const connect = require("./config/database");
app.get("/", (req, res)=>{
    res.send({success : true, message : "Successfuly Deployed !"})
})
app.use(express.json({ extended : true  }))
app.use(morgan('combined'))
app.use(cors())
app.use("/v1" , mainRoute)

const port = process.env.PORT  ? process.env.PORT  : 9000;
app.listen(port, (err) => {
    if(err)
    {
        console.log("server stopped due to error" , err);
    }
    console.log("server is up and running on port "+ port);
});