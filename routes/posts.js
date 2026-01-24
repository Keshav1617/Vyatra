const express = require("express");
const router = express.Router();

const Post = require("../models/post");

const WrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

// Index Route
router.get("/" , WrapAsync(async (req , res , next) =>{
    let posts = await Post.find();
    res.render("posts/index.ejs" , {posts});
}));

// New Route
router.get("/new" , WrapAsync((req , res , next) => {
    res.render("posts/new.ejs");
}));

// Create Route
router.post("/" , WrapAsync(async (req , res , next) => {
    let newpost = new Post(req.body.post);
    await newpost.save();
    res.redirect("/posts");
}));


// Edit Route
router.get("/:id/edit" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    let post = await Post.findById(id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("posts/edit.ejs" , {post});
}));


// Update Route
router.put("/:id" , WrapAsync(async (req , res , next) => {
    let {id} = req.params;
    let updatedpost = await Post.findByIdAndUpdate(id , req.body.post , {runValidators : true , new : true});
    if (!updatedpost) {
        return res.status(404).send("Post not found");
    }
    res.redirect("/posts");
}));


// Destroy Route
router.delete("/:id" , WrapAsync(async (req , res , next) => {
    let {id}= req.params;
    let deletedpost = await Post.findByIdAndDelete(id);
    res.redirect("/posts");
}));


module.exports = router;