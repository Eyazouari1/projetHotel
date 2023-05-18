const User = require("../models/user")
const bcryptjs= require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require ('config');
const secret=config.get('secret')

exports.register=async(req,res)=>{
    const{userName,email,password,phone, city,country,userRole}=req.body;
     const existantUser= await User.findOne({ email })
    if(existantUser) res.status(400).json({ msg:'User already exists!'})
    try {
       const newUser= new User({
        userName,
        email,
        password,
        phone,
        city,
        country,
        userRole,

       })
       let salt = await bcryptjs.genSalt(10);
       let hash = await bcryptjs.hash(password, salt);
       newUser.password=hash;
     
        await newUser.save();
        const payload={
         id:newUser._id,
      };
       let token = jwt.sign(payload,secret);
       res .status(200).send({
         token,
         user:{
            id:newUser._id,
            userName:newUser.userName,
            email:newUser.email,
            password:newUser.password,
            phone:newUser.phone,
            city:newUser.city,
            country:newUser.country,
            userRole:newUser.userRole
         }
       })
    } catch (error) {
       res.status(500).json({msg:error.message}) 
    }
}


exports.login=async(req,res)=>{
   const {email,password}=req.body;
try {
   const user= await User.findOne({ email });
   if(!  user)return res.status(404).json({msg:'bad credentials'})
   const isMatch=await bcryptjs.compare(password, user.password)
   if(!isMatch)return res.status(404).json({msg:'bad credentials'})
   const payload={
      id:user._id
   };
    let token = jwt.sign(payload,secret);
    res.send({
      token,
      user:{
         id:user._id,
         userName:user.userName,
         email:user.email,
         country:user.country,
         phone:user.phone,
         city:user.city,
         userRole:user.userRole,
      }
    })
} catch (error) {
   res.status(501).json({msg:error.message})   
}
}

exports.auth=(req,res)=>{
   res.send(req.user);
}
