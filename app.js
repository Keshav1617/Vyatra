const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");

const listings = require("./routes/listing");
const posts = require("./routes/posts");

const ExpressError = require("./utils/ExpressError");

const app = express();
const port = 8080;

app.engine("ejs" , ejsMate);
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use(methodOverride("_method"));

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


app.use("/listings" , listings);

app.use("/posts" , posts);


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