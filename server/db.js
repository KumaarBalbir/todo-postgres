/**
 * Pool is a class from the pg module that allows us to create a connection pool.
 * A connection pool is a cache of database connections maintained so that the connections
 * can be reused when future requests to the database are required.
 *
 * Creating a pool of connections is more efficient than opening a new connection
 * for every database query. The configuration object passed to the Pool constructor
 * contains the credentials and database information required to connect to the PostgreSQL database.
 */

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "76880510",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
