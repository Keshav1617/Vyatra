const joi = require("joi");  // Joi is used for server Side Schema validation.

module.exports.ListingSchema = joi.object({
    listing : joi.object({
        title : joi.string().trim().min(1).required(),
        description : joi.string().allow("").optional(),
        img : joi.string().uri().allow("").optional(),
        price: joi.number().min(0).required(),
        country : joi.string().trim().default("India"),
        state : joi.string().length(24).hex().required(),
        city : joi.string().trim().allow("").optional(),
    }).required()
});