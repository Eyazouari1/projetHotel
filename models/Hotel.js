const mongoose =require("mongoose")
const schema=mongoose.Schema
const hotelSchema=new schema(

{    name:{
    type:String,
    // required:true,
},
    type:{
        type:String,
    //  required:true,
     },
    service:{
        type:String,
        // required:true,
    },
    title:{
        type:String,
        // required:true,
    },
    imageUrl:String,
    
    Rooms:{
        type:[String],
        
    },
   address:{
    type:String,
    // required:true,
   },
   city:{
    type:String,
    // required:true,
   },
   rating:{
    type:Number,
    min:0,
    max:5,
   },
    price:{
        type:Number,
        // required:true,
    },
    description:{
        type:String,
        // required:true,
    }, 
    quality:{
        type:String,
        // required:true,
    },
    reservation_period:{
        type:Date,
        default:Date.now,
    },
   featured:{
    type:Boolean,
    default:false,
   }
})

module.exports=mongoose.model('hotel',hotelSchema)