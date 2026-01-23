const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");

const Post = require("./models/post");
const Listing = require("./models/listing");
const NatureEntity = require("./models/natureEntity");
const State = require("./models/state");

const WrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const { ListingSchema } = require("./Schema");

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


// Validation Schema Middleware
const validateListing = (req , res , next) => {
    let result = ListingSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400 , "Send Valid data for listing");
    }
    else{
        next();
    }
};

// Listing
// index Route
app.get("/listings" , WrapAsync(async(req , res , next) => {
    let alllistings = await Listing.find({});
    res.render("listing/index.ejs" , {alllistings});
}));


// New Route
app.get("/listings/new" , WrapAsync(async (req , res , next) => {
    const states = await State.find({});
    res.render("listing/new.ejs" , {states});
}));


// Create Route 
app.post("/listings" , validateListing , WrapAsync(async (req , res , next) => {
    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
}));


// Search Route
app.get("/listings/search" , WrapAsync(async (req , res , next) => {
        const {state} = req.query;
        if(!state){
            return res.redirect("/listings");
        }
        const normalizedState = state.trim();
        const stateDoc = await State.findOne({
            name: new RegExp(`^${normalizedState}$`, "i")  // i -> case insenstive  ^ (caret) -> Start of the string  $(dollar)-> End of the string
        });        
        if (!stateDoc) {
            return res.redirect("/listings");
        }
        const listings = await Listing.find({ state : stateDoc._id}).populate("state");
        res.render("listing/search.ejs" , {listings , searchedState : stateDoc.name });
}));


// show Route
app.get("/listings/:id" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {  // whenever use findById always check if the comming id is a valid id for mongoose or not.
        return res.status(404).send("Listing not found");
    }
    let listing = await Listing.findById(id); 
    res.render("listing/show.ejs" , {listing});
}));


// Edit Route
app.get("/listings/:id/edit" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    const states = await State.find({});
    res.render("listing/edit.ejs" , {listing , states});
}));

// update Route
app.put("/listings/:id",validateListing , WrapAsync(async(req,res , next) => {
    let updatedListing = await Listing.findByIdAndUpdate(id , req.body.listing , {runValidators : true , new : true});
    res.redirect("/listings");
}));

// destroy Route
app.delete("/listings/:id" , WrapAsync(async(req , res , next) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));












// posts
// Index Route
app.get("/posts" , WrapAsync(async (req , res , next) =>{
    let posts = await Post.find();
    res.render("posts/index.ejs" , {posts});
}));

// New Route
app.get("/posts/new" , wrapAsync((req , res , next) => {
    res.render("posts/new.ejs");
}));

// Create Route
app.post("/posts" , WrapAsync(async (req , res , next) => {
    let newpost = new Post(req.body.post);
    await newpost.save();
    res.redirect("/posts");
}));


// Edit Route
app.get("/posts/:id/edit" , wrapAsync(async (req , res , next) => {
    let {id} = req.params;
    let post = await Post.findById(id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("posts/edit.ejs" , {post});
}));


// Update Route
app.put("/posts/:id" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    let updatedpost = await Post.findByIdAndUpdate(id , req.body.post , {runValidators : true , new : true});
    if (!updatedpost) {
        return res.status(404).send("Post not found");
    }
    res.redirect("/posts");
}));


// Destroy Route
app.delete("/posts/:id" , WrapAsync(async (req , res , next) => {
    let {id}= req.params;
    let deletedpost = await Post.findByIdAndDelete(id);
    res.redirect("/posts");
}));


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