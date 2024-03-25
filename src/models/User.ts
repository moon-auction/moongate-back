import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  img: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    required: true,
  },
  verifiedInfo: {
    server: String,
    character: String,
  },
  role: String,
  level: Number,
  createdAt: Date,
  updatedAt: Date,
});

// Salt password
userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(Number(process.env.SALTROUNDS), function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

/*
  This is a schema for the confirm code
  This expires at 5 minutes
*/
const confirmSchema = new Schema({
  code: {
    type: Number,
    unique: true
  },
  url: {
    type: String,
    default: ""
  },
  deleted: {
    type: Boolean,
    default: false,
    required: true
  },
  name : {
    type: String,
    default: "",
  },
  server: {
    type: String,
    default: ""
  },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});


export const User = model('User', userSchema);
export const Confirm = model('Confirm', confirmSchema);