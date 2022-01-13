'use strict'
const { graphql, buildSchema } =require("graphql")
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

graphql(schema, '{hello}').then((result) => console.log(result))