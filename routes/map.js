const express = require("express");
const router = express.Router();
const State = require("../models/state");
const NatureEntiry = require("../models/natureEntity");

router.get("/:state" , async(req ,res) => {
    const stateName = req.params.state.toLowerCase();
    let state = await State.findOne({
        name : new RegExp(`^${stateName}$` , "i")
    });
    if(!state){
        return res.json([]);
    }

    let entities = await NatureEntiry.find({
        state : state._id
    });

    res.json(entities);
});

module.exports = router;
