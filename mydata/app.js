import mongoose from 'mongoose'
import express from 'express'
import express_graphql from 'express-graphql'
import Schema from './schema'
import cors from 'cors'

var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: Schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3002, () => console.log('MyData now running on localhost:3002/graphql'));