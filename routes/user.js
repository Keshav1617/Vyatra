const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup" , (req , res) => {
    res.render("users/signup.ejs");
});

router.post("/signup" , wrapAsync(async (req,res) => {
    try{
        let {fullName , email , password} = req.body;
        let newUser = new User({fullName ,email , isVerified : true,});
        const registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.flash("success" , "Welcome to Vyatra");
        res.redirect("/listings");
    }
    catch(err){
        req.flash("error" , err.message);
        res.redirect("/signup");
    }
}));

router.get("/login" , (req,res) => {
    res.render("users/login.ejs");
});

router.post("/login" , passport.authenticate('local', { failureRedirect: '/login' , failureFlash : true }) ,wrapAsync(async(req ,res) => {
    // passport will do the authentication part using authenticate middleware
    req.flash("success" , "Welcome back To Vyatra🌿");
    res.redirect("/listings");
}));

router.get("/logout" , (req , res , next) => {
    req.logOut((err) => {
        if(err){
            return next(err);
        }
        req.flash("success" , "Logged out Successfully");
        res.redirect("/listings");
    })
})

module.exports = router;
