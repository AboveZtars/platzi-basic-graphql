"use strict";

import { connectDB } from "./db";
import { Db, ObjectId } from "mongodb";
import { CourseResolvers } from "../types/graphqlTypes";
import { errorHandler } from "./errorHandler";

export const Course: CourseResolvers = {
  students: async (args: any) => {
    let db: Db;
    let studentsData;
    let ids;

    try {
      db = await connectDB();
      ids = args.students
        ? args.students.map((id: any) => new ObjectId(id))
        : [];
      studentsData =
        ids.length > 0
          ? await db
              .collection("students")
              .find({ _id: { $in: ids } })
              .toArray()
          : [];
    } catch (error) {
      errorHandler(error);
    }
    return studentsData as any;
  },
};
