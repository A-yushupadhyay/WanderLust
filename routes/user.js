const express = require("express");
const router = express.Router({mergeParams:true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controller/user.js");

router.route("/signup")
   .get(userController.getSign)
   .post(wrapAsync(userController.postSign));




router.route("/login")
   .get(userController.getLog)
   .post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.postLog);

// logout route
router.get("/logout",userController.logout);
module.exports = router;
