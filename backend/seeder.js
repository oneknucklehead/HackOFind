import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/users.js'
import LoginUser from './models/loginDetails.js'
import loginDetails from './data/loginDetails.js'
import users from './data/users.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await LoginUser.deleteMany()

    const dummyUsers = await User.insertMany(users)
    const dummyIds = await LoginUser.insertMany(loginDetails)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await LoginUser.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
