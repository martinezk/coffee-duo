// 4 routes: Get drinks, filter drinks, get food, filter food
const express = require('express');
const router = express.Router();

const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

const {Drinks, Food} = require ('./models');

router.get('/drinks', (req, res) => {
    Drinks
        .find()
        .exec()
        .then(drinks => {
            res.json(drinks);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        });
}); 

router.get('/food', (req, res) => {
    Food
        .find()
        .exec()
        .then(food => {
            res.json(food);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        });
}); 

module.exports = router;