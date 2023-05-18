const express=require("express")
const router=express.Router();
const {cerateRoom,updateRoom,deleteRoom,getRoom,getAllRoom}=require("../controllers/room.Controllers")
router.post("/room/:id", cerateRoom)
router.put("/update/:id",updateRoom)
router.get("/get/:id",getRoom)
router.get("/getAll",getAllRoom)
router.delete("/delete/:id/:hotelid",deleteRoom)



module.exports=router;