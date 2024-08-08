const express = require("express");
const {login,signup} = require("../Controllers/authController");
const validateToken=require("../Middlewares/validateToken");
const router=express.Router();

router.post("/login",login);
router.post("/signup",signup);
// router.post("current",validateToken)

module.exports=router;