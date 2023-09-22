const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");







const register = async (req,res)=>{
        try {
            const {email,password} = req.body;
            const isUserAlreadyExists = await UserModel.findOne({email});

            if(isUserAlreadyExists) return res.status(400).send({msg:"User Already Exists"});

            const hashPswword = await bcrypt.hash(password,Number(process.env.SALT_ROUNDS));

            const newUser = await new UserModel({...req.body,password:hashPswword});
            await newUser.save();

            res.status(201).send({msg:"User Registration Successful"})
        } catch (error) {
            console.log(error.message);
            res.status(501).send({msg:error.message});
        }
}


const login = async (req,res)=>{
        
}



const logout = async (req,res)=>{
        
}


module.exports={
    register,
    login,
    logout
}
