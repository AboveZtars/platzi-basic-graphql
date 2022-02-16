import { Db } from "mongodb";
import {
  CourseInput,
  EditCourseInput,
  StudentInput,
  MutationResolvers,
  EditStudentInput,
} from "../types/graphqlTypes";
import { connectDB } from "./db";

export const mutations: MutationResolvers = {
  //Courses
  createCourse: async (root: any, args: { input: CourseInput }) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("courses").insertOne(args.input);
      return args.input as any;
    } catch (error) {
      console.error(error);
    }
  },
  editCourse: async (
    root: any,
    args: { id: string; input: EditCourseInput }
  ) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("courses").updateOne({ _id: args.id }, args.input);
      return { _id: args.id, ...args.input } as any;
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  },
  editStudent: async (
    root: any,
    args: { id: string; input: EditStudentInput }
  ) => {
    let db: Db | undefined | null;
    try {
      db = await connectDB();
      db.collection("students").updateOne({ _id: args.id }, args.input);
      return { id: args.id, ...args.input } as any;
    } catch (error) {
      console.error(error);
    }
  },
};
