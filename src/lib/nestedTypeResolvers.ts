"use strict";

import { connectDB } from "./db";
import { Db, ObjectId } from "mongodb";
import {
  CourseResolvers,
  GlobalSearchResolvers,
  Monitor,
  PersonResolvers,
  Student,
  Course as CourseType,
} from "../types/graphqlTypes";
import { errorHandler } from "./errorHandler";

export const Course: CourseResolvers = {
  students: async (args: any) => {
    let db: Db;
    let personsData;
    let ids;

    try {
      db = await connectDB();
      ids = args.persons ? args.persons.map((id: any) => new ObjectId(id)) : [];
      personsData =
        ids.length > 0
          ? await db
              .collection("students")
              .find({ _id: { $in: ids } })
              .toArray()
          : [];
    } catch (error) {
      errorHandler(error);
    }
    return personsData as any;
  },
};
export const Person: PersonResolvers = {
  __resolveType: (person: Student | Monitor, context, info) => {
    let personObject: {} = { ...person };
    if (personObject.hasOwnProperty("avatar")) {
      return "Student";
    }
    return "Monitor";
  },
};
export const GlobalSearch: GlobalSearchResolvers = {
  __resolveType: (item: Student | Monitor | CourseType, context, info) => {
    let itemObject: {} = { ...item };
    console.log(itemObject);
    if (itemObject.hasOwnProperty("title")) {
      return "Course";
    }
    if (itemObject.hasOwnProperty("phone")) {
      return "Monitor";
    }
    return "Student";
  },
};
