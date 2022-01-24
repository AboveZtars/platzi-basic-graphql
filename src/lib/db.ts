"use strict";
import { MongoClient } from "mongodb";

const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } = process.env;

const urlMongodb = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

export async function connectDB() {
  let connection;
  if (!connection) {
    try {
      const client = new MongoClient(urlMongodb);
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
      connection = await client.db();
    } catch (error) {
      console.error(error);
    }
  }
  return connection;
}
