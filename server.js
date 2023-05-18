const express=require('express');
const path=require("path")
const connectDb = require('./config/connectDB');
const user= require('./routes/userRoute');
const hotel=require('./routes/hotelRoute');
const room=require('./routes/roomsRoute');
const upload=require('./routes/uplaod')

const app=express()
app.use(express.json())
// path  user
app.use('/user',user) 
// path  hotel
 app.use('/hotel',hotel)
//  path  room
 app.use('/room',room)
//  path  upload
 app.use('/api/upload',upload)
 //middelwares at the image
 app.use(express.static(path.join(__dirname,"images")))

connectDb();
const PORT=process.env.PORT||8000;
app.listen(PORT,err=>err?console.log(error):console.log(`the server running successfuly an PORT${PORT}`))