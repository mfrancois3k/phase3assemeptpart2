// create schema for originCountry
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const originCountrySchema = new Schema({
    name: { type: String, required: true},
    country_Flag: { type: String, required: true},
    motto: [{ type: String, required: true }]
});

module.exports = mongoose.model('originCountry', originCountrySchema);

