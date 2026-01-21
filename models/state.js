const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required :true,
        unique: true,
    },

    code: {  // UK - UttaraKhand
        type: String,
    },

    country : {
        type : String,
        default : "India",
    }, 

    description : {
        type : String,
    },

    // Important part
    location : {
        type : {
            type : String,
            enum : ["Point"], // means location must be single point only
            default : "Point"
        },
        coordinates: {
            type : [Number],  // [logitude , latitude]
        }
    }
});

stateSchema.index({location : "2dsphere"}); // index is like table of content in book important for fast search & madatory for maps  2dshere is used because earth is round not flat so to seach perfectly

const State = mongoose.model("State" , stateSchema);

module.exports = State;


