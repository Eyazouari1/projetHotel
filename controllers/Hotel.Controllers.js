const hotel = require("../models/Hotel");

exports.createHotel = async (req, res) => {
  // const newHotel=new hotel({req.body})
  const {
    name,
    title,
    type,
    rooms,
    description,
    service,
    address,
    distance,
    rating,
    price,
    quality,
    reseration_periode,
    city,image
  } = req.body;
  console.log(req.file)
  // const {image}=req.file
  console.log(image)
  try {
    const newHotel = new hotel({
      name,
      title,
      type,
      rooms,
      description,
      service,
      address,
      distance,
      rating,
      price,
      quality,
      reseration_periode,
      city,
      image,})
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
//update hotel
exports.update = async (req, res) => {
  try {
    const update = await hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//delete hotel
exports.deleteHotel = async (req, res) => {
  try {
    const deleted = await hotel.findByIdAndDelete(req.params.id);
    res.send(deleted);
  } catch (error) {
    res.status(502).json({ msg: error.message });
  }
};
//get hotel
exports.getHotel = async (req, res) => {
  try {
    const hotel = await hotel.findById(req.params.id)
 


    res.status(200).json({ hotel });
  } catch (error) {
    res.status(503).json({ msg: error.message });
  }
};
//get All hotel
exports.getAllHotel = async (req, res) => {
  try {
    const hotels = await hotel.find();
    res.status(200).json({ hotels });
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};
exports.getAllHotel = async (req, res) => {
  try {
    const hotels = await hotel.find()
    
    res.status(200).json({ hotels });
  } catch (error) {
    res.status(504).json({ msg: error.message });
  
  }
};


