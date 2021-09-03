const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    Title : { 
              type : String ,
                required : true 
            },
    writtenBy : {
                    type : String
                }

})



const BlogModel = mongoose.model( "Blog" , BlogSchema );

module.exports = BlogModel