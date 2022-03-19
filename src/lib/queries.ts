"use strict";
import { Db, ObjectId } from "mongodb";
import {
  CourseDbObject,
  QueryResolvers,
  StudentDbObject,
} from "../types/graphqlTypes";
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
      //console.log(db)
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
  // Students
  students: async () => {
    let db: Db | undefined;
    let students;
    try {
      db = await connectDB();
      students = (await db?.collection(`students`).find().toArray()) as any;
      console.log(students);
      //console.log(db)
    } catch (err: any) {
      errorHandler(err);
    }
    return students as StudentDbObject[];
  },
  student: async (root: any, args: any) => {
    let db: Db | undefined;
    let student;
    try {
      db = await connectDB();
      student = (await db
        ?.collection(`students`)
        .findOne({ _id: new ObjectId(args.id) })) as any;
      console.log(student);
    } catch (err: any) {
      errorHandler(err);
    }
    return student as StudentDbObject;
  },
};
