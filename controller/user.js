const passport = require("passport");
const User = require("../models/user.js");
module.exports.getSign = (req,res)=>{
    res.render("/Major Project -1/views/users/signup.ejs");
}
module.exports.postSign = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success" , "welcome to Wanderlust");
            return res.redirect("/listings");
        })
    }
    catch(e){
        req.flash("error", e.message);
        res.redirect("/listings");
    }
   
}
module.exports.getLog = (req,res)=>{
    res.render("/Major Project -1/views/users/login.ejs");
}
module.exports.postLog = async(req,res)=>{
    let redirectUrl = res.locals.redirectUrl||"/listings";
    req.flash("success", "Welcome back on Wanderlust!");
    res.redirect(redirectUrl);
}
module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    });
}
