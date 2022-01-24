const courses = [
  {
    _id: "0",
    title: "First Course",
    teacher: "Xaluman",
    description: "Basic Magic Course",
    topic: "Magic",
  },
  {
    _id: "1",
    title: "Second Course",
    teacher: "Maxulumian",
    description: "Magic Course",
    topic: "Magic",
  },
  {
    _id: "2",
    title: "Three Course",
    teacher: "Mianxuluma",
    description: "Advance Magic Course",
    topic: "Magic",
  },
];

export const resolvers = {
  Query: {
    courses: () => courses,
    course: (root: any, args: any) => {
      return courses.find(course => course._id === args.id)
    } 
  },
};
