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

    

    // ==========  JOIN TABLE QUERIES BEGIN HERE   ============:

    

    // Select users to display when an interest is selected in the browser:
    filterByUserIdsInterest(id){
        return db.many(`
        SELECT first_name, last_name, cohort, horoscope
        FROM users u
        JOIN user_interest ui
        ON u.id = ui.users_id
        JOIN interests i
        ON ui.interest_id = i.id
        WHERE ui.interest_id = $1`
        , id)
    }

}