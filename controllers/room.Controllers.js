const room=require('../models/Rooms')
const hotel=require('../models/Hotel')
//create a room
exports.cerateRoom= async(req,res)=>{
const hotelId=req.params.hotelid;
const newRoom= new room(req.body)
try {
  const savedRoom=  await newRoom.save()
  try {
    await hotel.findByIdAndUpdate(hotelId,{$push:{room: savedRoom._id}})
  } catch (error) {
    res.send(error)
  }
  res.status(200).json(savedRoom)
} catch (error) {
  res.status(500).json(error)  
}
}
//update room
exports.updateRoom=async(req,res)=>{
  try {
    const updateRoom=await room.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
    res.send(updateRoom)
  } catch (error) {
    res.status(500).json({msg:error.message}) 
  }
}
//delete room
exports.deleteRoom=async(req,res)=>{
  try {
    await room.findByIdAndDelete(req.params.id)
        res.send('room deleted')
  } catch (error) {
    res.status(502).json({msg:error.message})
  }
}
//get room
exports.getRoom=async(req,res)=>{
  try {
    const room=await room.findById(req.params.id)
    res.status(200).json({room})
  } catch (error) {
    res.status(503).json({msg:error.message})
  }
}
//get All room
exports.getAllRoom=async(req,res)=>{
  try {
    const rooms=await room.find()
    res.status(200).json({rooms})
  } catch (error) {
    res.status(504).json({msg:error.message})
  }
}
