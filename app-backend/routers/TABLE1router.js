const router = require('express')();
const TABLE1controller = require('../controllers/TABLE1controller')

// This is where we would set up the approperiate paths for the data
// that we stored in res.locals VIA controllers

module.exports = {
    // EX function:
    
    // router.get('/',
    // TABLE1controller.getAll,
    // (req, res) => res.json({errthang: res.locals.errthang})    
    // );


    // ReactTweedr examples other CRUD paths:
    //Uncomment this line for posting new tweeds to the database:
    // tweedRoutes.post('/', tweedsController.create);

    //Uncomment this line for editing tweeds:   
    // tweedRoutes.put('/:id', tweedsController.update);
    
    //Uncomment this line for deleting tweeds:
    //tweedRoutes.delete('/:id', tweedsController.destroy);

}