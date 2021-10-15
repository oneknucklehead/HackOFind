import express from 'express'
import asyncHandler from 'express-async-handler'
import {
  addUsersController,
  getUsersController,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(getUsersController).post(addUsersController)

export default router
