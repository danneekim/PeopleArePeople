const router = require('express')();
const interestController = require('../controllers/interestController');

// Route for getting interests by categories:
// ex: localhost:3001/interests
router.get('/', interestController.getAll,
(req,res) => res.json(res.locals.interests)
);

// Route for getting interests by specified category
// ex: localhost:3001/interests/Music
// ex: localhost:3001/interests/Food
router.get('/:categories', interestController.getAllCategories,
(req, res) => res.json(res.locals.interests)
);

//Route for getting interest by ID
// ex: localhost:3001/interests/category/8
router.get('/category/:id', interestController.getOne,
(req,res) => res.json(res.locals.interest)
);

// Route for getting users with similar interests
// ex: localhost: 3001/interests/matched/1
router.get('/matched/:id', interestController.getMatchedInterests,
(req,res) => res.json(res.locals.interests)
);

module.exports = router;
