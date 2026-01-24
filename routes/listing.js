const express = require("express");
const router = express.Router();

const WrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const mongoose = require("mongoose");
const { ListingSchema } = require("../Schema");
const Listing = require("../models/listing");
const State = require("../models/state");

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

// index Route
router.get("/" , WrapAsync(async(req , res , next) => {
    let alllistings = await Listing.find({});
    res.render("listing/index.ejs" , {alllistings});
}));


// New Route
router.get("/new" , WrapAsync(async (req , res , next) => {
    const states = await State.find({});
    res.render("listing/new.ejs" , {states});
}));


// Create Route 
router.post("/" , validateListing , WrapAsync(async (req , res , next) => {
    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
}));


// Search Route
router.get("/search" , WrapAsync(async (req , res , next) => {
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

// Map Route
router.get("/map" , (req , res) => {
    res.render("listing/map.ejs");
});


// show Route
router.get("/:id" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {  // whenever use findById always check if the comming id is a valid id for mongoose or not.
        return res.status(404).send("Listing not found");
    }
    let listing = await Listing.findById(id); 
    res.render("listing/show.ejs" , {listing});
}));


// Edit Route
router.get("/:id/edit" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    const states = await State.find({});
    res.render("listing/edit.ejs" , {listing , states});
}));

// update Route
router.put("/:id",validateListing , WrapAsync(async(req,res , next) => {
    let updatedListing = await Listing.findByIdAndUpdate(id , req.body.listing , {runValidators : true , new : true});
    res.redirect("/listings");
}));

// destroy Route
router.delete("/:id" , WrapAsync(async(req , res , next) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));


module.exports = router; // router is a object more sepecific it is an instance of router class of express