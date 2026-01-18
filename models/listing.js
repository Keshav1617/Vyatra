const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    description: {
        type : String,
    },
    img : {
        type : String,
        default : "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726761927494",
        set : (v) => v === "" ? "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726761927494" : v, // if empty img is submited by the user.
    },
    price : {
        type : Number,
    },
    country: {
        type : String,
    },
    location: {
        type : String,
    }
});

let Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;