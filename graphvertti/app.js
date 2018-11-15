import mongoose from 'mongoose'
import express from 'express'
import express_graphql from 'express-graphql'
import Schema from './schema'
import cors from 'cors'
import PersonSearch from './query/personSearch'

const personSearch = new PersonSearch()

var root = {
    PersonByNationalID: personSearch.getPersonByNationalId
};

var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: Schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3001, () => console.log('Graphvertti now running on localhost:3001/graphql'));