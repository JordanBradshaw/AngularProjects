require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error())
db.once('open', () => console.log('Connected to Database'))

app.use(cors());
app.use(express.json())

const cardsRouter = require('./routes/cards')
app.use('/cards',cardsRouter)



app.listen(3000, () => console.log('Server Started Cors'))
