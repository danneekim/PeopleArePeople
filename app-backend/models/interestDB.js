const { db, pgp } = require('../config/conn');

module.exports = {

    //Find all interests:
    index(){
        return db.many(`
        SELECT * 
        FROM interests`);
    },

    // Find all the interests by Categories:
    indexCategory(categories){
        return db.many(`
            SELECT *
            FROM interests
            WHERE categories = $1`
            , categories);
    },

    // Find each individual interest by ID:
    findById(id){
        return db.one(`
        SELECT *
        FROM interests
        WHERE id = $1`
        , id);
    },

    

}