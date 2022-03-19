import { Db, ObjectId } from "mongodb";
import {
  CourseInput,
  EditCourseInput,
  StudentInput,
  MutationResolvers,
  EditStudentInput,
} from "../types/graphqlTypes";
import { connectDB } from "./db";
import { errorHandler } from "./errorHandler";

export const mutations: MutationResolvers = {
  //Courses
  createCourse: async (root: any, args: { input: CourseInput }) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("courses").insertOne(args.input);
      return args.input as any;
    } catch (error) {
      errorHandler(error);
    }
  },
  editCourse: async (
    root: any,
    args: { id: string; input: EditCourseInput }
  ) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("courses").updateOne(
        { _id: new ObjectId(args.id) },
        { $set: { ...args.input } }
      );
      return { _id: args.id, ...args.input } as any;
    } catch (error) {
      errorHandler(error);
    }
  },
  deleteCourse: async (root: any, args: { id: string }) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("courses").deleteOne({ _id: new ObjectId(args.id) });
      const response = (await db
        ?.collection(`courses`)
        .find()
        .toArray()) as any;
      return response;
    } catch (error) {
      errorHandler(error);
    }
  },
  addStudent: async (
    root: any,
    args: { courseId: string; studentId: string }
  ) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      let course = await db
        ?.collection(`courses`)
        .findOne({ _id: new ObjectId(args.courseId) });
      let student = await db
        ?.collection(`students`)
        .findOne({ _id: new ObjectId(args.studentId) });

      if (course && student) {
        db.collection("courses").updateOne(
          { _id: new ObjectId(args.courseId) },
          { $addToSet: { students: new ObjectId(args.studentId) } }
        );
      }
      return course as any;
    } catch (error) {
      errorHandler(error);
    }
  },

  //Students
  createStudent: async (root: any, args: { input: StudentInput }) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("students").insertOne(args.input);
      return args.input as any;
    } catch (error) {
      errorHandler(error);
    }
  },
  editStudent: async (
    root: any,
    args: { id: string; input: EditStudentInput }
  ) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("students").updateOne(
        { _id: new ObjectId(args.id) },
        { $set: { ...args.input } }
      );
      return { id: args.id, ...args.input } as any;
    } catch (error) {
      errorHandler(error);
    }
  },
  deleteStudent: async (root: any, args: { id: string }) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("students").deleteOne({ _id: new ObjectId(args.id) });
      const response = (await db
        ?.collection("students")
        .find()
        .toArray()) as any;
      return response;
    } catch (error) {
      errorHandler(error);
    }
  },
};
