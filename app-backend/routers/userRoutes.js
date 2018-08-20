const router = require('express')();
const userController = require('../controllers/userController')

// This is where we would set up the approperiate paths for the data
// that we stored in res.locals VIA controllers
    
    // Show all users 
    router.get('/', userController.getAll,
    (req, res) => res.json({ users: res.locals.users })
    );

    router.get('/:id', userController.getOne,
    (req,res) => res.json({ users: res.locals.user})
    );

    // ReactTweedr examples other CRUD paths:
    //Uncomment this line for posting new tweeds to the database:
    // tweedRoutes.post('/', tweedsController.create);

    //Uncomment this line for editing tweeds:   
    // tweedRoutes.put('/:id', tweedsController.update);
    
    //Uncomment this line for deleting tweeds:
    //tweedRoutes.delete('/:id', tweedsController.destroy);

module.exports = router;