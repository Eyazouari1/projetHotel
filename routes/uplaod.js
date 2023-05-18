const path = require("path");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  ///destination qui se trouve les images a enregistrer
  destination(req, file, cb) {
    cb(null, "client/public/images");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
//////////////////image dans la base de donne
router.post("/up", upload.single("image"), (req, res) => {
  res.send(`/images/${req.file.filename}`);
});

module.exports = router;