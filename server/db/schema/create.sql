DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS crawls CASCADE;
DROP TABLE IF EXISTS venues CASCADE;
DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE crawls (
  id SERIAL PRIMARY KEY NOT NULL,
  time VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  price_in_cents BIGINT NOT NULL,
  description TEXT NOT NULL,
  rating INTEGER NOT NULL,
  crawl_id INTEGER REFERENCES crawls(id) ON DELETE CASCADE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE
);
