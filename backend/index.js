import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import loginRoute from './routes/loginRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API has started running')
})

app.use('/api/userDetails', userRoute)
app.use('/api/users', loginRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
