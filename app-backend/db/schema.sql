DROP TABLE IF EXISTS user_interest;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS interests;

-- DATABASE SCHEMA

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    cohort VARCHAR(255) NOT NULL,
    horoscope VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW (),
    password VARCHAR(255)
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    categories VARCHAR(64) NOT NULL,
    interests VARCHAR(64) NOT NULL
);

CREATE TABLE user_interest (
    users_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    interest_id INTEGER REFERENCES interests (id) ON DELETE CASCADE
);


