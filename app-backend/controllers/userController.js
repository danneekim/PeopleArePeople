const userModel = require('../models/userDB')

// This is where would bring in our SQL Model functions
// AND assign them to approperiate controller functions
// IN ORDER to store respective data in res.locals
// AND to export them out to our router.

module.exports = {

  // Get all controller to return all users from DB
  getAll(req, res, next) {
    userModel.index()
      .then(users => {
        res.locals.users = users;
        next();
      })
      .catch(e => next(e));
  },

  // Get one controller to return single user from DB
  getOne(req, res, next) {
    const id = req.params.id;
    userModel.findById(id)
      .then(user => {
        res.locals.users = user;
        next();
      })
      .catch(e => next(e));
  },

  // Register new user in DB
  createUser(req, res, next) {
    const user = req.body;
    userModel.create(user)
      .then(user => {
        res.locals.users = user; 
        next();
      })
      .catch(e => next(e));
  },

  // Update user information in DB
  updateUser(req, res, next) {
    const id = req.params;
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      cohort: req.body.cohort,
      horoscope: req.body.horoscope,
    }

    userModel.update({ ...id, ...data })
      .then(user => {
        res.locals.users = user;
        next();
      });
  },

  /*
  ============   JOIN TABLE REQ'S BEGIN HERE   =============:
  */

  // Send req to DB and select users interests
  getAllUserInterests(req, res, next) {
    const id = req.params.id;
    userModel.findUserInterests(id)
      .then(user => {
        res.locals.users = user
        next();
      })
      .catch(e => next(e));
  },

  // Send req to DB to create a users interests for matching
  createUserInterests(req, res, next) {
    const interests = req.body;
    interests[1] = interests[1].map(el => parseInt(el))
    userModel.saveUserInterests(interests)
      .then(data => {
        res.locals.userInterests = data
        next();
      })
      .catch(e => next(e));
  },

  // Send req to DB to delete a users interests if requested
  destroyUserInterest(req, res) {
    const userId = req.params.id;
    const { interestId } = req.body;
    userModel.deleteUserInterest({ id: userId, interest_id: interestId })
      .then(() => {
        res.json({ message: 'Interest deleted' });
      })
      .catch(e => {
        res.status(400).json(e);
      });
  }

}