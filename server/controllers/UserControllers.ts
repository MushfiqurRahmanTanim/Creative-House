import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

import {
  sendActivationEmail,
  sendPasswordResetEmail,
} from '../utils/mail/index';
import User from '../models/UserModel';
import {
  generateActivationToken,
  generateIdToken,
  resetPasswordIdToken,
} from '../utils/token/index';


// Register New User

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const activationToken = generateActivationToken({
    name,
    email,
    password,
  });
  console.log(activationToken);
  const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
  await sendActivationEmail(name, email, url);
  res.json({ message: `Account activation email has sent to ${email}` });
});

// Active User

export const activeUser = asyncHandler(async (req, res)=> {
  const { token } = req.body;

  // Decode token
  const decode = jwt.verify(token, process.env.JWT_SECRET as string);
  // Check if token is not valid
  if (!decode) {
    res.status(401).json({ error: 'Activation token expired' });
  }

  const { name, email, password } = decode;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ error: 'User already exists' });
  }

  // Create new user
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,

        token: generateIdToken(user._id),
      },
      message: `Your account has been successfully activated!`,
    });
  }
});
export const requestResetPassword = asyncHandler(async (req, res)=> {
  const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
   // Check if user does not exist
   if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  const url = `${process.env.CLIENT_URL}/password/reset/${resetPasswordIdToken(
    user._id
  )}`;
  await sendPasswordResetEmail(email, url);
   res.status(200).json({
    message: `Password reset link has been sent to ${email}`,
  })
  
});


// // Request to reset password
// export const changePassword = asyncHandler(async (req:Request, res:Response)=> {
//   const { token, password } = req.body;

//   // Verify token
//   const decode = await jwt.verify(token, process.env.JWT_SECRET as string);
//   // Check if token is valid
//   if (!decode) {
//     res.status(401);
//     throw new Error('Invalid token');
//   }

//   const id = decode.id;
//   // Update password

//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   const user = await User.findByIdAndUpdate(id, {
//     password: hashedPassword,
//   });

//   // Check if user does not exist
//   if (!user) {
//     res.status(404);
//     throw new Error('User not found');
//   }

//   await user.save();

//   return res.status(200).json({
//     message: `Your password has been changed successfully`,
//   });
// });

// User Login

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (user && (await user.matchPassword(password))) {
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
       
        token: generateIdToken(user._id),
      },
      message: `Welcome back ${user.name}!`,
    });
  } else {
    res.status(401);
    throw new Error('Password is incorrect');
  }
});