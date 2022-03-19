"use strict";
import { Resolvers } from "../types/graphqlTypes";
import { mutations } from "./mutations";
import { queries } from "./queries";
import { Course, Person, GlobalSearch } from "./nestedTypeResolvers";

export const resolvers: Resolvers = {
  Query: queries,
  Mutation: mutations,
  Course,
  Person,
  GlobalSearch,
};
