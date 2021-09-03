const BlogModel = require("../model/blog.model");

const listOfAllBlogCntrl = (req , res )=>{
    BlogModel.find((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "blog has added" , data : result })
    })
}

const getBlogDetailCntrl = (req , res )=>{
    const blogId = req.params.id;
    console.log(blogId);
    BlogModel.findById(blogId , (err ,result )=>{
        if(err)
        {
            if(err.name === "CastError")
            {
                return res.status(403).json({ status : 403 ,msg  : "problem with id", error : err })
            }
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(200).json({ status : 200 , msg  : "blog details found" , data : result })
    })

}

const addNewBlogCntrl = (req , res )=>{
    const { Title , writtenBy }  = req.body;

    const data =  new  BlogModel({ Title : Title , writtenBy : writtenBy });

    data.save((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "blog has added" , data : result })
    })
}
const deleteBlogCntrl = (req , res )=>{
    const blogId = req.params.id;
    console.log(blogId);
    BlogModel.findByIdAndDelete(blogId , (err ,result )=>{
        if(err)
        {
            if(err.name === "CastError")
            {
                return res.status(403).json({ status : 403 ,msg  : "problem with id", error : err })
            }
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(200).json({ status : 200 , msg  : "blog details found" , data : result })
    })

}
const UpdateBlogDetailCntrl = (req , res )=>{
    
}


module.exports = { listOfAllBlogCntrl , addNewBlogCntrl , deleteBlogCntrl , UpdateBlogDetailCntrl , getBlogDetailCntrl}
