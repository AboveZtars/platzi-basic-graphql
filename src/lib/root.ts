'use strict'
import { Db } from "mongodb";
import { Resolvers, CourseDbObject } from "../types/graphqlTypes";
import { connectDB } from "./db";

export const resolvers: Resolvers = {
  Query: { 
    courses: async () => {
      let db: Db| undefined;
      let courses;
      try {
        db = await connectDB()
        courses = await db?.collection(`courses`).find().toArray() as any
      } catch (err:any) {
        console.error(err)
      }
      return courses as CourseDbObject[]
    },
    
    course: async (root: any, args: any) => {
      let db: Db| undefined;
      let course;
      try {
        db = await connectDB()
        course = db?.collection(`courses`).findOne({_id: args.id}) as any
      } catch (err:any) {
        console.error(err)
      }
      return course as CourseDbObject
    } 
  },
};
