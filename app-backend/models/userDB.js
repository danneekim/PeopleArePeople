const { db, pgp } = require('../config/conn');

// This brings in our "project3_db" database
// Where we can refer to as "db"
// In order to execute sql query functions

module.exports = {

  // Find all users in user index
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
        WHERE id = $1`, id)
  },

  // Register user in DB
  create(user) {
    return db.one(`
        INSERT INTO users (first_name, last_name, cohort, horoscope)
        VALUES ($/first_name/, $/last_name/, $/cohort/, $/horoscope/)
        RETURNING *`, user);
  },

  // Update a users information in the DB
  update(user) {
    return db.one(`
      UPDATE users
      SET 
      first_name = $/first_name/,
      last_name = $/last_name/,
      cohort = $/cohort/,
      horoscope = $/horoscope/
      WHERE users.id = $/id/
      RETURNING *`, user);
  },



  /*
  ==============   JOINS TABLE QUERIES BEGIN HERE   ==============
  */

  

  // Select all users by interest
  findUserInterests(id){
    return db.many(`
    SELECT interests, interest_id
    FROM interests i
    JOIN user_interest ui
    ON i.id = ui.interest_id
    JOIN users u
    ON ui.users_id = u.id
    WHERE u.id = $1`
    , id);
  },

  // Insert users interests into join table. If a user selects many interests, the first insert is utilized. If a user only selects one interest, second insert is utilized.
  saveUserInterests(interests) {
    const id = interests[0];
    const interestId = interests[1];
    if (Array.isArray(interestId)){
      const promises = interestId.map(intIds => 
      db.many(`
      INSERT INTO user_interest (users_id, interest_id)
      VALUES ($1, $2)
      RETURNING *`, [id, intIds]));
      return Promise.all(promises);
    } else {
      return db.one(`
      INSERT INTO user_interest (users_id, interest_id)
      VALUES ($1, $2)
      RETURNING *`, interests)
    }
  },

  // Delete a users interests from join if requested
  deleteUserInterest(id) {
    return db.none(`
        DELETE FROM user_interest ui
        WHERE ui.interest_id = $/interest_id/
        AND ui.users_id = $/id/`, id)
  }

}