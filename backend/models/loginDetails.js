import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const loginSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

loginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

loginSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const LoginUser = mongoose.model('LoginUser', loginSchema)

export default LoginUser
