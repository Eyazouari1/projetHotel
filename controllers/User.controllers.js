const user  = require("../models/user");
//create user
exports.createUser=async(req,res)=>{
  const newUser=new user(req.body)
  try {
      const saveUser=  await newUser.save()
        res.status(200).json(saveUser)
     } catch (error) {
   res.status(500).json({msg:error.message})    
   }
}
//update user
exports.update=async(req,res)=>{
  try {
    const update=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.send(update)
  } catch (error) {
    res.staus(501).json({msg:error.message})
  }
}
//delete user
exports.deleteUser=async(req,res)=>{
  try {
    await  user.findByIdAndDelete(req.params.id)
        res.send('user deleted')
  } catch (error) {
    res.staus(502).json({msg:error.message})
  }
}
//get hotel
exports.getUser=async(req,res)=>{
  try {
    const User=await user. findId(req.params.id)
    res.status(200).json({msg:User})
  } catch (error) {
    res.staus(503).json({msg:error.message})
  }
}
//get All user
exports.getAllUser=async(res,req)=>{
  try {
    const users =await user.find()
    res.status(200).json({msg:users})
  } catch (error) {
    res.staus(504).json({msg:error.message})
  }
}
