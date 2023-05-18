const express=require("express")
const upload=require('./uplaod')

const router=express.Router();
const { createHotel, update, getHotel, getAllHotel, deleteHotel ,countByCity} = require("../controllers/Hotel.Controllers");
router.post("/hotel",upload, createHotel)
router.put("/hotel/:id",update)
router.get("/hotel/:id",getHotel)

router.delete("/hotel/:id",deleteHotel)

router.get("/hotel",getAllHotel)

module.exports=router;