const mongoose = require("mongoose");

const initListing = require("./listing");
const intiPost = require("./post");
const initState = require("./state");
const initNature = require("./nature");

const Listing = require("../models/listing");
const Post = require("../models/post");
const NatureEntity = require("../models/natureEntity");
const State = require("../models/state");

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

const normalize = (str) => str.trim().toLowerCase();

const initDB = async () => {
    try{
        // Clean Database
        await Listing.deleteMany({});
        await Post.deleteMany({});
        await NatureEntity.deleteMany({});
        await State.deleteMany({});

        // inserting state first so that we can create statemap
        const insertedStates = await State.insertMany(initState);

        // Creating state map 
        const stateMap = {};
        insertedStates.forEach(state => {
            stateMap[normalize(state.name)] = state._id;
        });

        // Prepare listings with state objectId
        const finalListing = initListing.sampleListings(stateMap);
        await Listing.insertMany(finalListing);

        // Insert Post
        await Post.insertMany(intiPost.data);

        const finalNatureData = initNature.natureEntities(stateMap);
        await NatureEntity.insertMany(finalNatureData);

        console.log("Data was initialised successfully");

    } catch (err) {
        console.error("Error initializing DB:", err.message);
    } finally {
        mongoose.connection.close();
    }
}

initDB();