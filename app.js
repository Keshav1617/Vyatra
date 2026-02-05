const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");

const listingRouter = require("./routes/listing");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const mapRoutes = require("./routes/map");

const ExpressError = require("./utils/ExpressError");

const app = express();
const port = 8080;
const sessionOptions = {
    secret : "MysuperSecretCode",
    resave : false,
    saveUninitialized: true,
    cookie: {
        // expires: Date.now() + 7*24*60*60*1000, // data in miliseconds 
        maxAge : 7*24*60*60*1000,  
        httpOnly : true, // to prevent from attacks
    }
};

app.engine("ejs" , ejsMate);
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: "email" },User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Vyatra");
}

app.use((req, res, next) => {
  res.locals.success = req.flash("success") || [];
  res.locals.error = req.flash("error") || [];
  next();
});

app.use("/listings" , listingRouter);

app.use("/posts" , postsRouter);

app.use("/" , userRouter);

app.use("/api/map" , mapRoutes);  // (/api/map/kerala → JSON)


// all path error handler
app.use((req, res , next) => {  // throws error if no route matches
    next(new ExpressError(404 , "Page Not Found!"))
})

// Global error handler
app.use((err , req , res, next) => {  // catches the error and deconstruct it and then send res
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went Wrong";
    res.status(statusCode).render("listing/error.ejs", {statusCode , message});
})  

app.listen(port , () => {
    console.log(`Server is listening on port : ${port}`);
})