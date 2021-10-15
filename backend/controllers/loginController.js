import asyncHandler from 'express-async-handler'
import LoginUser from '../models/loginDetails.js'
import generateToken from '../utils/generateToken.js'

//desc      Auth user
//@route    POST /api/users/login
//@access    private
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await LoginUser.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or password')
  }
})

//desc      Fetch user profile
//@route    GET /api/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await LoginUser.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('No such user Found')
  }
})

//desc        Register user
//@route      POST /api/users
//@access     private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, cPassword } = req.body
  const nameCheck = /^[A-Za-z ]{3,}$/gm
  const passwordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm
  const userExists = await LoginUser.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  } else {
    //checks
    if (password !== cPassword) {
      res.status(400)
      throw new Error('Passwords do not match')
    }
    if (!nameCheck.test(name)) {
      res.status(400)
      throw new Error(
        "Invalid name"
      )
    }
    if (name.length < 3) {
      res.status(400)
      throw new Error('Minimum 3 characters required')
    }
    if (password.length < 8) {
      res.status(400)
      throw new Error('Password should have minimum 8 characters')
    }
    if (!passwordCheck.test(password)) {
      res.status(400)
      throw new Error(
        'Password should have minimum 8 characters, should have one capital letter, one small letter, one number and atleast one of the following special characters: ! @ $ % ^ & *'
      )
    }

    const user = await LoginUser.create({
      name,
      email,
      password,
    })
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid User Data')
    }
  }
})

export { authUser, getUserProfile, registerUser }
