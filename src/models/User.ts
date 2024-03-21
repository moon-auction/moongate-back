import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  img: {
    type: String,
    default: ""
  },
  password: String,
  verifiedInfo: {
    server: String,
    character: String,
  },
  role: String,
  level: Number,
  createdAt: Date,
  updatedAt: Date,
});

const confirmSchema = new Schema({
  code: {
    type: Number,
    unique: true
  },
  name : {
    type: String,
    default: "",
  },
  server: {
    type: String,
    default: ""
  }
});

export default model('User', userSchema);
export const Confirm = model('Confirm', confirmSchema);