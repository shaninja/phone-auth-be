import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import usersRoutes from './routes/users'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Express app is listening on port 3000')
})
