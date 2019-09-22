import {Schema} from 'mongoose'

export default new Schema({
  email: {type: String, trim: true, required: true, unique: true, index: true, lowercase: true},
  password: {type: String}
})