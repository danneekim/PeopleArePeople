const router = require('express')();
const interestController = require('../controllers/interestController');


// Route for getting interests by categories:
router.get('/', interestController.getAll,
(req,res) => res.json(res.locals.interests)
);

// Route for getting interests by specified category
router.get('/:categories', interestController.getAllCategories,
(req, res) => res.json(res.locals.interests)
);




module.exports = router;