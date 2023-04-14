import { config } from "dotenv";
import { Knex } from "knex";
import { Pool, QueryResult } from "pg";

config()

const pool = new Pool()

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT as string),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  }
})

export {knex, pool}