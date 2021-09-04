const mongoose = require("mongoose");

 const atlasUri = 'mongodb+srv://ashfaq123:ashfaq123@cluster0.sno6u.mongodb.net/testDb'
 const localUri = 'mongodb://localhost:27017/oxymad'
 
module.exports = mongoose.connect(atlasUri , {})
  .then((result)=>{
    console.log("db connected");
    // console.log(result);
}).catch((err)=>{
    console.log("connection failed");
    console.log(err);
});