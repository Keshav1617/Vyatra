const mongoose = require("mongoose");
const initListing = require("./listing");
const intiPost = require("./post");
const Listing = require("../models/listing");
const Post = require("../models/post");

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


const initDB = async () => {
    await Listing.deleteMany({});
    await Post.deleteMany({});
    await Listing.insertMany(initListing.data);
    await Post.insertMany(intiPost.data);
    console.log("Data was Initialised");
}

initDB();