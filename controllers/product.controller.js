const ProductModel = require("../model/product.model");


const addNewProductCntrl = (req , res )=>{
    const { name , description , price , category , stock , sold }  = req.body;

    const data =  new  ProductModel({ name : name , description : description , price : price , category : category , stock : stock , sold : sold });

    data.save((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "New Product added" , data : result })
    })
}

module.exports = { addNewProductCntrl }