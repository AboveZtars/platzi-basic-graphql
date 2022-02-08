import { Db } from "mongodb";
import { CourseInput } from "../types/graphqlTypes";
import { connectDB } from "./db";

export const mutations: any = {
    createCourse: async (root: any, args: {input: CourseInput}) => {
        let db: Db| undefined | null
        try {
            db = await connectDB()
            db.collection('courses').insertOne(args.input) 
            return args.input
        } catch (error) {
            console.error(error)
        }
    }

} 