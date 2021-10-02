import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/users.js'

const router = express.Router()

//desc      Fetch all users
//@route    GET /api/userDetails
//@access    Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find({})
    if (users) res.json(users)
    else {
      res.status(404)
      throw new Error('No Users Found')
    }
  })
)

//desc      Create new user
//@route    POST /api/userDetails
//@access    Public
router.post(
  '/',
  asyncHandler(async (req, res) => {
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
)

export default router
