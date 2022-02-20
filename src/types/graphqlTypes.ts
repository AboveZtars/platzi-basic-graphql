import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  course?: Maybe<Course>;
  /** Return courses */
  courses?: Maybe<Array<Maybe<Course>>>;
  student?: Maybe<Student>;
  /** Return students */
  students?: Maybe<Array<Maybe<Student>>>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
};


export type QueryStudentArgs = {
  id: Scalars['ID'];
};

export type Course = {
  __typename?: 'Course';
  _id: Scalars['ID'];
  description: Scalars['String'];
  students?: Maybe<Array<Maybe<Student>>>;
  teacher?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  topic?: Maybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudent?: Maybe<Course>;
  /** Courses */
  createCourse?: Maybe<Course>;
  /** Students */
  createStudent?: Maybe<Student>;
  deleteCourse?: Maybe<Array<Maybe<Course>>>;
  deleteStudent?: Maybe<Array<Maybe<Student>>>;
  editCourse?: Maybe<Course>;
  editStudent?: Maybe<Student>;
};


export type MutationAddStudentArgs = {
  courseId: Scalars['ID'];
  studentId: Scalars['ID'];
};


export type MutationCreateCourseArgs = {
  input: CourseInput;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationEditCourseArgs = {
  id: Scalars['ID'];
  input: EditCourseInput;
};


export type MutationEditStudentArgs = {
  id: Scalars['ID'];
  input: EditStudentInput;
};

export type CourseInput = {
  description: Scalars['String'];
  teacher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  topic?: InputMaybe<Scalars['String']>;
};

export type StudentInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type EditCourseInput = {
  description?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<Scalars['String']>;
};

export type EditStudentInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Course: ResolverTypeWrapper<Course>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Student: ResolverTypeWrapper<Student>;
  Mutation: ResolverTypeWrapper<{}>;
  CourseInput: CourseInput;
  StudentInput: StudentInput;
  EditCourseInput: EditCourseInput;
  EditStudentInput: EditStudentInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Course: Course;
  String: Scalars['String'];
  Student: Student;
  Mutation: {};
  CourseInput: CourseInput;
  StudentInput: StudentInput;
  EditCourseInput: EditCourseInput;
  EditStudentInput: EditStudentInput;
  Boolean: Scalars['Boolean'];
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  course?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<QueryCourseArgs, 'id'>>;
  courses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType>;
  student?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<QueryStudentArgs, 'id'>>;
  students?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType>;
};

export type CourseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  students?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType>;
  teacher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addStudent?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationAddStudentArgs, 'courseId' | 'studentId'>>;
  createCourse?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationCreateCourseArgs, 'input'>>;
  createStudent?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<MutationCreateStudentArgs, 'input'>>;
  deleteCourse?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType, RequireFields<MutationDeleteCourseArgs, 'id'>>;
  deleteStudent?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType, RequireFields<MutationDeleteStudentArgs, 'id'>>;
  editCourse?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationEditCourseArgs, 'id' | 'input'>>;
  editStudent?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<MutationEditStudentArgs, 'id' | 'input'>>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Course?: CourseResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';
export type CourseDbObject = {
  _id: string,
  description: string,
  students?: Maybe<Array<Maybe<Student>>>,
  teacher?: Maybe<string>,
  title: string,
  topic?: Maybe<string>,
};

export type StudentDbObject = {
  _id: string,
  email: string,
  name: string,
};
