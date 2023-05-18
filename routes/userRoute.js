const express=require("express")
const  router =express.Router();
const {registerRules,validator}=require("../middlewares/validator");
const verifyAuth = require("../middlewares/verifyAuth");
const { deleteUser, getAllUser, getUser, update, createUser } = require("../controllers/User.controllers");
const { register, login, auth } = require("../controllers/Auth.Controllers");
router.post("/user", createUser)
router.put("/update/:id",update)
router.get("/get/:id",getUser)
router.get("/getAll",getAllUser)
router.delete("/user/:id",deleteUser)
router.post('/register', registerRules(),validator,register)
router.post('/login',login)
router.get('/auth',verifyAuth,auth)


module.exports=router;