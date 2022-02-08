import { makeExecutableSchema } from "@graphql-tools/schema";
import {DIRECTIVES} from "@graphql-codegen/typescript-mongodb"
import express from "express"
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import path from "path";
import {resolvers} from "./lib/resolvers"

const app = express()
const port = process.env.PORT || 3000
const typeDefs = readFileSync(path.join(__dirname,`lib`,`schema.graphql`), 'utf8')

const schema = makeExecutableSchema({
    typeDefs:[
        DIRECTIVES,
        typeDefs
    ],
    resolvers
})


app.use("/api", graphqlHTTP({
    schema:schema,
    rootValue: resolvers,
    graphiql:true
}))
app.listen(port, ()=>{
    console.log(`Server running on: http://localhost:${port}/api`)
})