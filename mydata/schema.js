import { buildSchema } from 'graphql'
export default buildSchema(`
"""
MYDATA Querys
"""
type Query {
    "Find my data."
    MyDataByNationalID(Henkilotunnus: String!): [MyData],
}

"""
MYDATA Mutations
"""
type Mutation {
    "Method for adding a new event"
    AddEvent(input: MyDataInput!): MyData
}

"""
Type for MyData
"""
type MyData {
    requestedBy: String,
    organization: String,
    released: Date,
    nationalID: String
}

"""
Input type for MyData.
"""
input MyDataInput {
    requestedBy: String,
    organization: String,
    released: Date,
    nationalID: String
}

"""
Custom type for dates
"""
scalar Date
`)
