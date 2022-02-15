import { Db } from "mongodb";
import {
  CourseInput,
  StudentInput,
  MutationResolvers,
} from "../types/graphqlTypes";
import { connectDB } from "./db";

export const mutations: MutationResolvers = {
  //Course
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
  //Student
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
};
