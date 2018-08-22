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

    // Returns the interest by their id
    getOne(req,res,next){
        interestModel.findById(req.params.id)
            .then(interest => {
                res.locals.interest = interest;
                next();
            })
            .catch(e => next(e));
    },

    // Returns the users that have the SAME specified interest
    getMatchedInterests(req,res,next){
        const id = req.params.id
        console.log(id);
        interestModel.filterByUserIdsInterest(id)
            .then(interests => {
                res.locals.interests = interests;
                next();
            })
            .catch(e => next(e));
    }


}