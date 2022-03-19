"use strict";
import { Db, ObjectId } from "mongodb";
import { CourseDbObject, QueryResolvers } from "../types/graphqlTypes";
import { connectDB } from "./db";
import { errorHandler } from "./errorHandler";

export const queries: QueryResolvers = {
  // Courses
  courses: async () => {
    let db: Db | undefined;
    let courses;
    try {
      db = await connectDB();
      courses = (await db?.collection(`courses`).find().toArray()) as any;
      console.log(courses);
    } catch (err: any) {
      errorHandler(err);
    }
    return courses as CourseDbObject[];
  },

  course: async (root: any, args: any) => {
    let db: Db | undefined;
    let course;
    try {
      db = await connectDB();
      course = db
        ?.collection(`courses`)
        .findOne({ _id: new ObjectId(args.id) }) as any;
    } catch (err: any) {
      errorHandler(err);
    }
    return course as CourseDbObject;
  },
  // Person
  persons: async () => {
    let db: Db | undefined;
    let persons;
    try {
      db = await connectDB();
      persons = (await db?.collection(`students`).find().toArray()) as any;
      console.log(persons);
    } catch (err: any) {
      errorHandler(err);
    }
    return persons;
  },
  person: async (root: any, args: any) => {
    let db: Db | undefined;
    let person;
    try {
      db = await connectDB();
      person = (await db
        ?.collection(`students`)
        .findOne({ _id: new ObjectId(args.id) })) as any;
      console.log(person);
    } catch (err: any) {
      errorHandler(err);
    }
    return person;
  },
};
