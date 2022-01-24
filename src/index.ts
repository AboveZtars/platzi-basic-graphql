import { graphql, buildSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express"
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import path from "path";
import {resolvers} from "./lib/root"

const app = express()
const port = process.env.PORT || 3000
const typeDefs = readFileSync(path.join(__dirname,`lib`,`schema.graphql`), 'utf8')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


app.use("/api", graphqlHTTP({
    schema:schema,
    rootValue: resolvers,
    graphiql:true
}))
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})
//graphql(schema, '{hello}', root).then((response) => console.log(response))
