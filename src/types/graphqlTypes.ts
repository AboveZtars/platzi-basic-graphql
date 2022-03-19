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
  /** Global Search */
  items?: Maybe<Array<Maybe<GlobalSearch>>>;
  person?: Maybe<Person>;
  /** Return students */
  persons?: Maybe<Array<Maybe<Person>>>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
};


export type QueryItemsArgs = {
  keyword: Scalars['String'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};

export type Course = {
  __typename?: 'Course';
  _id: Scalars['ID'];
  description: Scalars['String'];
  level?: Maybe<Level>;
  students?: Maybe<Array<Maybe<Student>>>;
  teacher?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  topic?: Maybe<Scalars['String']>;
};

export enum Level {
  Advance = 'advance',
  Intermediate = 'intermediate',
  Noob = 'noob'
}

export type Student = Person & {
  __typename?: 'Student';
  _id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Person = {
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type GlobalSearch = Course | Monitor | Student;

export type Monitor = Person & {
  __typename?: 'Monitor';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudent?: Maybe<Course>;
  /** Courses */
  createCourse?: Maybe<Course>;
  /** Person */
  createPerson?: Maybe<Person>;
  deleteCourse?: Maybe<Array<Maybe<Course>>>;
  deletePerson?: Maybe<Array<Maybe<Person>>>;
  editCourse?: Maybe<Course>;
  editPerson?: Maybe<Person>;
};


export type MutationAddStudentArgs = {
  courseId: Scalars['ID'];
  personId: Scalars['ID'];
};


export type MutationCreateCourseArgs = {
  input: CourseInput;
};


export type MutationCreatePersonArgs = {
  input: PersonInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePersonArgs = {
  id: Scalars['ID'];
};


export type MutationEditCourseArgs = {
  id: Scalars['ID'];
  input: EditCourseInput;
};


export type MutationEditPersonArgs = {
  id: Scalars['ID'];
  input: EditPersonInput;
};

export type CourseInput = {
  description: Scalars['String'];
  level?: InputMaybe<Level>;
  teacher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  topic?: InputMaybe<Scalars['String']>;
};

export type PersonInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type EditCourseInput = {
  description?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<Scalars['String']>;
};

export type EditPersonInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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
  Level: Level;
  Student: ResolverTypeWrapper<Student>;
  Person: ResolversTypes['Student'] | ResolversTypes['Monitor'];
  GlobalSearch: ResolversTypes['Course'] | ResolversTypes['Monitor'] | ResolversTypes['Student'];
  Monitor: ResolverTypeWrapper<Monitor>;
  Mutation: ResolverTypeWrapper<{}>;
  CourseInput: CourseInput;
  PersonInput: PersonInput;
  EditCourseInput: EditCourseInput;
  EditPersonInput: EditPersonInput;
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
  Person: ResolversParentTypes['Student'] | ResolversParentTypes['Monitor'];
  GlobalSearch: ResolversParentTypes['Course'] | ResolversParentTypes['Monitor'] | ResolversParentTypes['Student'];
  Monitor: Monitor;
  Mutation: {};
  CourseInput: CourseInput;
  PersonInput: PersonInput;
  EditCourseInput: EditCourseInput;
  EditPersonInput: EditPersonInput;
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
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GlobalSearch']>>>, ParentType, ContextType, RequireFields<QueryItemsArgs, 'keyword'>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'id'>>;
  persons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
};

export type CourseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Level']>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType>;
  teacher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  __resolveType: TypeResolveFn<'Student' | 'Monitor', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type GlobalSearchResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalSearch'] = ResolversParentTypes['GlobalSearch']> = {
  __resolveType: TypeResolveFn<'Course' | 'Monitor' | 'Student', ParentType, ContextType>;
};

export type MonitorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monitor'] = ResolversParentTypes['Monitor']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addStudent?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationAddStudentArgs, 'courseId' | 'personId'>>;
  createCourse?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationCreateCourseArgs, 'input'>>;
  createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationCreatePersonArgs, 'input'>>;
  deleteCourse?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType, RequireFields<MutationDeleteCourseArgs, 'id'>>;
  deletePerson?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<MutationDeletePersonArgs, 'id'>>;
  editCourse?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType, RequireFields<MutationEditCourseArgs, 'id' | 'input'>>;
  editPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationEditPersonArgs, 'id' | 'input'>>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Course?: CourseResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  GlobalSearch?: GlobalSearchResolvers<ContextType>;
  Monitor?: MonitorResolvers<ContextType>;
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
  avatar?: Maybe<string>,
  email: string,
  name: string,
};

export type MonitorDbObject = {
  _id: string,
  email: string,
  name: string,
  phone?: Maybe<string>,
};
