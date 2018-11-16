import mongoose from 'mongoose'
import mydataSchema from './mydataSchema'

module.exports = mongoose.model('mydata', mydataSchema)