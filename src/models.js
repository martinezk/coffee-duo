//will require mongoose
const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    Item: {type: String, required: true},
    Image: {type: String, required: true},
    Description: {type: String, required: true},
    Type: {type: String, required: true},
    Pairing: {type: String, required: true},
}, {collection: "drinks"});

const foodSchema = mongoose.Schema({
    Item: {type: String, required: true},
    ImageURL: {type: String, required: true},
    Description: {type: String, required: true},
    Type: {type: String, required: true},
    Pairing: {type: String, required: true},
}, {collection: "food"});

const Drinks = mongoose.model('drinks', drinkSchema);
const Food = mongoose.model('food', foodSchema);

module.exports = { Drinks, Food };