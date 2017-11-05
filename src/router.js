// 4 routes: Get drinks, filter drinks, get food, filter food

router.get('/drinks', (req, res) => {
    Drink
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