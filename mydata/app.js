import mongoose from 'mongoose'
import express from 'express'
import express_graphql from 'express-graphql'
import Schema from './schema'
import cors from 'cors'
import MyDataQuery from './query/mydataQuery'
import MyDataMutation from './mutations/mydataMutation'

const mydataQuery = new MyDataQuery()
const mydataMutation = new MyDataMutation()

var root = {
    AddEvent: mydataMutation.createEvent,
    MyDataByNationalID: mydataQuery.getMyData
}
var connectionstring = 'mongodb://mongoadmin:secret@' + (process.env.MONGODB ? process.env.MONGODB : 'localhost') + '/vrk?authSource=admin'

mongoose.connect(connectionstring,{ useNewUrlParser: true }, function(err) { if(err) console.log(err) })

var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: Schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3002, () => console.log('MyData now running on localhost:3002/graphql'));