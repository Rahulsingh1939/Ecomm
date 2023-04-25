import userModel from '../models/userModel.js';

export const registerController = async (req,res) => {
    const {name , email, password, phone,address} = req.body;

    //Checking if all the fields are filled
    if(!name || !email || !password || !phone || !address){
        return res.status(400).json({error: "Please fill all the fields"});
    }

    //Checking if the user already exists
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.status(200).send({
            sucess:true,
            message: "User already exists"
        });
    }
};