const router = require('express')();
const userController = require('../controllers/userController')

// This is where we would set up the approperiate paths for the data
// that we stored in res.locals VIA controllers
// ROUTE IS /users

// Show all users 
router.get('/', userController.getAll,
    (req, res) => res.json(res.locals.users)
);

// Route to create a new user
router.post('/', userController.createUser,
    (req, res) => res.json(res.locals.users)
);

// Show one user
router.get('/:id', userController.getOne,
    (req, res) => res.json(res.locals.users)
);

// Update a users information
router.put('/:id', userController.updateUser,
    (req, res) => res.json(res.locals.users)
);

// Get all user interests
router.get('/:id/interests', userController.getAllUserInterests,
    (req, res) => res.json(res.locals.users)
);

// Delete a specific users interests from the join table
router.delete('/:id/interests', userController.destroyUserInterest)

// Create a users interests after creating user profile
router.post('/interests', userController.createUserInterests,
    (req, res) => res.json(res.locals.userInterests))


module.exports = router;
