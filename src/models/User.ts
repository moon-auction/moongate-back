import { Schema, model as Model } from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
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
    type: {
      server: {
        type: String,
        required: true
      },
      character: {
        type: String,
        required: true
      }
    },
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "user"
  },
  level: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 255,
  },
  exp: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
  methods: { 
    comparePassword: async function(candidatePassword: string): Promise<boolean> {
      return await bcrypt.compare(candidatePassword, this.password);
    }
  }
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


userSchema.methods.comparePassword = async function(candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};


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
    required: true,
    default: "",
  },
  server: {
    type: String,
    default: ""
  },
  expireAt: {
    type: Date,
    expires: 300,
  },
});


export const User = Model('User', userSchema);
export const Confirm = Model('Confirm', confirmSchema);