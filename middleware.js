module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.flash("error" , "User Must be logged in to Create Listing");
        return res.redirect("/login");
    }
    next();
}