// create schema for lambRecipes
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const originCountrySchema = require('./originCountry').schema


// create schema for lambRecipesSchema add in the key _id value objecid


const originCountry_id = new Schema({
    _id: {
       type: new Schema.Types.ObjectId,
        required: true 
    },
});

const {_id: originCountry_id} = originCountry_id


const lambRecipesSchema = new Schema({
    title: {type: String, required: true },
    origin_country: [originCountry_id],
    ingredients:  [{ type: String, required: true}],
    picture: {type: String, required: true },
 });

 module.exports = mongoose.model('lambRecipes', lambRecipesSchema);