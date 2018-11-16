import mongoose from 'mongoose'
const Schema = mongoose.Schema
const myDataSchema = mongoose.Schema({
    requestedBy: {type: String},
    organization: {type: String},
    released: {type: Date},
    nationalID: {type: String}
},{
  timestamps: true
})
export default myDataSchema