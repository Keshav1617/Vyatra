const mongoose = require("mongoose");

const natureEntitySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    type : {
        type : String,
        enum: [
        "National Park",
        "Wildlife Sanctuary",
        "Waterfall",
        "River",
        "Zoo",
        "Mountain",
        "Plant Species",
        "Animal Species",
        "Lake",
        "Glacier",
        "Forest",
        "Other"
        ],
        required: true
    },

    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",  // ref only tells Mongoose: “If you ever populate this field, look in the State collection.”
        required: true
    },

    description: String,

    isEndemic: {
        type: Boolean,
        default: false // true for species only found in that state
    },

    scientificName: String, // for plants/animals

    images: [
        {
        type: String
        }
    ],

    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
            },
            coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },

    elevation: Number, // for mountains (meters)
    length: Number, // for rivers (km)
    height: Number, // for waterfalls (meters)

    bestTimeToVisit: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

natureEntitySchema.index({ location: "2dsphere" });

module.exports = mongoose.model("NatureEntity", natureEntitySchema);