const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/post");
const Listing = require("./models/listing");

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


// Listing
// index Route
app.get("/listings" , async(req , res) => {
    let alllistings = await Listing.find({});
    res.render("listing/index.ejs" , {alllistings});
})

// show Route
app.get("/listings/:id" , async (req , res) => {
    let {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {  // whenever use findById always check if the comming id is a valid id for mongoose or not.
        return res.status(404).send("Listing not found");
    }
    let listing = await Listing.findById(id); 
    res.render("listing/show.ejs" , {listing});
})









// posts
// Index Route
app.get("/posts" , async (req , res) =>{
    let posts = await Post.find();
    res.render("posts/index.ejs" , {posts});
})

// New Route
app.get("/posts/new" , (req , res) => {
    res.render("posts/new.ejs");
})

// Create Route
app.post("/posts" , (req , res) => {
    let {username , content , location , country} = req.body;
    let img = "https://media.gettyimages.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
    let newpost = new Post({
        username : username,
        img : img,
        content : content,
        location : location,
        country : country,
    });

    // this is an async process hai but we don't need to use async and await here as whenever we use then() , then js automatically know's that this is an async process.
    newpost
        .save()
        .then((res) => {
            console.log("Chat was Saved");
        })
        .catch((err) => {
            console.log(err);
        })
    res.redirect("/posts");
});


// Edit Route
app.get("/posts/:id/edit" , async (req , res) => {
    let {id} = req.params;
    let post = await Post.findById(id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("posts/edit.ejs" , {post});
})


// Update Route
app.put("/posts/:id" , async (req , res) => {
    let {id} = req.params;
    let {username , content , location , country} = req.body;
    let updatedPost = {
        username : username,
        content : content,
        location : location,
        country : country,
    }
    let post = await Post.findByIdAndUpdate(id , updatedPost , {runValidators : true , new : true});
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.redirect("/posts");
})


// Destroy Route
app.delete("/posts/:id" , async (req , res) => {
    let {id}= req.params;
    let deletedpost = await Post.findByIdAndDelete(id);
    res.redirect("/posts");
})

app.listen(port , () => {
    console.log(`Server is listening on port : ${port}`);
})