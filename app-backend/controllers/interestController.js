const interestModel = require('../models/interestDB')

module.exports = {

    // Returns all interests from DB
    getAll(req,res,next){
        interestModel.index()
        .then (interests => {
            res.locals.interests = interests;
            next();
        })
        .catch(e => next(e));
    },

    // Returns all interests for specified category from DB
    getAllCategories(req,res,next){
        const categories = req.params.categories
        interestModel.indexCategory(categories)
            .then(interests => {
                res.locals.interests = interests;
                next();
            })
            .catch(e => next(e));
    },


}