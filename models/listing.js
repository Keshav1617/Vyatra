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
        default : "India",
    },

    state: {
        type: Schema.Types.ObjectId,
        ref: "State",
        required: true,
        index: true,  // “Create an index on the state field in the listings collection.”  state_id  → [listing1, listing2, listing3]
    },

    city: {
        type : String,
    }
});

let Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;