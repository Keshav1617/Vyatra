const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    img : {
        type : String,
        default: "https://media.gettyimages.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg=",
    },
    content : {
        type : String,
        required : true,
        maxLength : 100,
    },
    created_at : {
        type : Date,
        default : new Date(),
    },
    location : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
});


const Post =  mongoose.model("Post" , postSchema);

module.exports = Post;