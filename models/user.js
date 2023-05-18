const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const userSchema= new Schema(
{
    userName:String,
    email:String,
    password:String,
    phone:String,
    city:String,
    country:String,

    userRole:{
        type:String,
        Roles:['user','admin'],
        default:'user',
    }
},
{timestamps:true})
module.exports=mongoose.model("user",userSchema)