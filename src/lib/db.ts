"use strict";
import { MongoClient } from "mongodb";
require("dotenv").config()

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const urlMongodb = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

export async function connectDB() {
  let connection;
  if (!connection) {
    try {
      const client = new MongoClient(urlMongodb);
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
      connection = client.db();
    } catch (error) {
      console.error(error);
      process.exit(1)
    }
  }
  return connection;
}
