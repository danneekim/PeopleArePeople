const router = require('express')();
const userController = require('../controllers/userController')

// This is where we would set up the approperiate paths for the data
// that we stored in res.locals VIA controllers
    
  

  // Show all users 
  router.get('/', userController.getAll,
    (req, res) => res.json(res.locals.users)
  );

  router.post('/', userController.createUser,
    (req, res) => res.json({ user: res.locals.users })
  );

  router.get('/:id', userController.getOne,
    (req, res) => res.json(res.locals.users)
  );

  router.put('/:id', userController.updateUser,
    (req, res) => res.json(res.locals.users)
  );

  

module.exports = router;