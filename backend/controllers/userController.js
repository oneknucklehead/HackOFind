import asyncHandler from 'express-async-handler'
import User from '../models/users.js'

//desc      Create new user
//@route    POST /api/userDetails
//@access    Public
const addUsersController = asyncHandler(async (req, res) => {
  const user = req.body
  const createdUser = await User.create({
    ...user,
  })
  if (createdUser) {
    res.status(201).json({
      ...user,
    })
  } else {
    res.status(500)
    throw new Error('Some required Fields are missing')
  }
})

//desc      Fetch all users
//@route    GET /api/userDetails
//@access    Public
const getUsersController = asyncHandler(async (req, res) => {
  const users = await User.find({})
  if (users) {
    res.json(users)
  } else {
    res.status(404)
    throw new Error('No Users Found')
  }
})

export { addUsersController, getUsersController }
