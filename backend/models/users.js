import mongoose from 'mongoose'
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    twitter: {
      type: String,
    },
    blogs: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
const User = mongoose.model('User', userSchema)
export default User
