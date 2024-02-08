import { Schema, model } from 'mongoose';

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export default model('Admin', AdminSchema);