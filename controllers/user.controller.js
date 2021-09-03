const UserModel = require("../model/user.model");


const addNewUserCntrl = (req , res )=>{
    const { name , email , password }  = req.body;


    const data =  new  UserModel({ name : name , email : email , password : password });

    data.save((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "New user added" , data : result })
    })
}

module.exports = { addNewUserCntrl }