"use strict";
import { Resolvers } from "../types/graphqlTypes";
import { mutations } from "./mutations";
import { queries } from "./queries";
import { Course } from "./nestedTypeResolvers";

export const resolvers: Resolvers = {
  Query: queries,
  Mutation: mutations,
  Course,
};
