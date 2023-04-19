import User from '../model/UserModel.js';

import { Router } from 'express';

import bcrypt from 'bcryptjs';
const { hash } = bcrypt;

const router = new Router();

//View Customer by ID
router.post('/login', async (req, res) => {
  console.log(req.body.email);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (user) {
      res.status(200).json({
        message: 'User Details',
        data: user,
      });
    } else {
      res.status(401).json({
        message: 'Invalid Credentials',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//View All Customers
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      message: 'All User Details',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Register New Customer
router.post('/', async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    const findUserName = await User.findOne({
      username: req.body.username,
    });
    if (findUser) {
      res.status(409).json({
        message: 'Email already exists,try Login!',
      });
    } else if (findUserName) {
      res.status(409).json({
        message: 'Username already Taken',
      });
    } else {
      const user = new User({ ...req.body });

      await user.save();

      res.status(200).json({
        message: 'User successfully added',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Edit Customer
router.put('/:id', async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(req.body.password, 8);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json({
        message: 'Updated User Successfully',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Delete Customer
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'User has been deleted',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// // forgot email-password
// router.post('/forgot-password', forgotPassword);

// // Reset Password
// router.post('/reset-password/:_id/:newToken', resetPassword);

export default router;
