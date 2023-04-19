import mongoose from 'mongoose';

import validator from 'validator';
const { isEmail } = validator;

import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter the email'],
      unique: [true, 'Email already taken'],
      validate(value) {
        if (!isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);

//Find the customer by email and password from the database and send it back
UserSchema.statics.findByCredentials = async (email, password) => {
  console.log(email);
  const User = mongoose.model('user', UserSchema);
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to log in');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  // console.log(isMatch)
  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

//Hash plain password before saving
UserSchema.pre('save', async function (next) {
  const user = this;

  //only want to hash the password if the customer modifies the password, if it is already hashed, then it shouldn't get hashed again
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const user = mongoose.model('user', UserSchema);
export default user;
