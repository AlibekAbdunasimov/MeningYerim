import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'
import connectDb from './config/db.js'
import landRoute from './routes/landRoute.js'
import userRoute from './routes/userRoute.js'

const app = express()

dotenv.config()
connectDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use('/images', express.static('images'))  // /images bosa baseURL/images/imageURL
app.use(express.static('images')) // bunda baseURL/imageURL

app.get('/', (req, res) => res.send('hello world'))
app.use('/user', userRoute)
app.use('/lands', landRoute)

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server started on port -- ${process.env.PORT}`.yellow.bold)
)
