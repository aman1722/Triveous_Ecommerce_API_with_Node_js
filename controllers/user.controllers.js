const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");







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
            res.status(501).send({msg:"Internal Server error",error:error.message});
        }
}


const login = async (req,res)=>{
        try {
            const {email,password} = req.body;
            const userExists = await UserModel.findOne({email});;
            
            if(!userExists) return res.status(400).send({msg:"User not exixts! Plaese register first"});

            const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

            if(!isPasswordCorrect) return res.status(400).send({msg:"Incorrect Password!"});;

            const token = jwt.sign(
                { user_id: userExists._id, role: userExists.role },
                process.env.JWT_LOGIN_SECRET,
                {
                  expiresIn: "3h",
                }
            );
          
            res.status(200).json({ message: "Login Successful", token });
        } catch (error) {
            console.log(error.message);
            res.status(501).send({msg:"Internal Server error",error:error.message});
        }
}



const logout = async (req,res)=>{
        
}


module.exports={
    register,
    login,
    logout
}
