const mongoose =require("mongoose")
const schema=mongoose.Schema
const roomSchema=new schema(

{  
    title:{
        type:String,
        required:true,
    },
   maxPepole:{
    type:Number,
    required:true,
   },
   imageUrl:String,
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }, 
    roomNumbers:[{number:Number,unavailableDate:[{type:Date}]}]
},{timestamps:true},
);


module.exports=mongoose.model('room',roomSchema)