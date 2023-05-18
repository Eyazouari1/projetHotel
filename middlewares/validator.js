const { check,validationResult } = require("express-validator");

exports.registerRules=()=>[
    check('userName',"this failed is required").notEmpty(),
    check('email','this failed is required').notEmpty(),
    check('email','this failed should be a valid email').isEmail(),
    check('password','this failed should be least 6 characters').isLength({min:6}),
    // check('phone',"this failed is required").notEmpty(),
    // check('country',"this failed is required").notEmpty(),
    // check('city',"this failed is required").notEmpty(),

];
exports.validator =(req,res,next)=>{
const errors=validationResult(req);
errors.isEmpty()?next():res.status(406).json({errors:errors.array()})
}



