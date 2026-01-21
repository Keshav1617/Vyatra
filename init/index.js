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
        await Listing.deleteMany({});
        await Post.deleteMany({});
        await NatureEntity.deleteMany({});
        await State.deleteMany({});

        await Listing.insertMany(initListing.data);
        await Post.insertMany(intiPost.data);


        const insertedStates = await State.insertMany(initState);

        const stateMap = {};
        insertedStates.forEach(state => {
            stateMap[normalize(state.name)] = state._id;
        });

        const finalNatureData = initNature.data.map(item => {
        const { stateName, ...rest } = item;

        const stateId = stateMap[normalize(stateName)];
        if (!stateId) {
            throw new Error(`❌ Invalid stateName in nature data: ${stateName}`);
        }

        return {
            ...rest,
            state: stateId
        };
        });

        await NatureEntity.insertMany(finalNatureData);
    }
    catch(err){
        console.error("❌ Error initializing DB:", err.message);
    }
    finally{
        mongoose.connection.close();
    }
    console.log("Data was Initialised");
}

initDB();