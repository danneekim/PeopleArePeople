const { db, pgp } = require('../config/conn');

// This brings in our "project3_db" database
// Where we can refer to as "db"
// In order to execute sql query functions

module.exports = {

  // Find all users method
  index() {
    return db.many(`
        SELECT *
        FROM users
    `);
  },

  // Find user information for logged-in user
  findById(id) {
    return db.one(`
        SELECT *
        FROM users
        WHERE user.id = $1`, id)
  },

  //register user in DB
//   create(user) {
    
//   }

      
  

}