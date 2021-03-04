const pgPromise = require("pg-promise");

const db = pgPromise()({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_DATABASE || "",
  ssl: { rejectUnauthorized: false },
});

let events = "CREATE TABLE events ( id text PRIMARY KEY, server VARCHAR ( 50 ) NOT NULL, channel TEXT, start_date timestamp , end_date timestamp, response_message TEXT, pass TEXT UNIQUE, created_by TEXT, created_date timestamp, file_url TEXT, is_active BOOLEAN DEFAULT TRUE, is_whitelisted BOOLEAN NULL, whitelist_file_url TEXT NULL);"
let codes = "CREATE TABLE codes ( ID SERIAL PRIMARY KEY, code VARCHAR ( 50 ) NOT NULL, event_id TEXT, username TEXT NULL, is_active BOOLEAN DEFAULT TRUE, claimed_date timestamp NULL, created_date timestamp);"
let banned = "CREATE TABLE banned ( ID SERIAL PRIMARY KEY, user_id TEXT );"

db.query(events)
db.query(codes)
db.query(banned)
