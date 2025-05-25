const userModel=require('../models/userModel');

const loginControoler=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const user=await userModel.findOne({email,password});
    if(!user){
        return res.status(400).json({message:'Invalid email or password'});
    }
    res.status(200).json({
        success:true,
        user,
    });
    }
    catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
}


const registerControoler=async(req,res)=>{
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
          success: true,
          newUser,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error,
        });
      }
    };
    

module.exports={loginControoler,registerControoler}