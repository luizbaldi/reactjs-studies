const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
})

const modelClass = mongoose.model('user', userSchema)

module.exports = modelClass