const pgp = require('pg-promise')();

// Name of our DB
const opts = process.env.DATABASE_URL || {
  database: 'project3_db'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};

// This brings in our database: project3_db 
// In order to run sql queries to extract data using pg-promise