//modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//variables
const PORT = process.env.PORT
const databaseLink = process.env.databaseLink

//route variables
const bookRoute = require('./routes/bookRoute')

//Database connections
mongoose.connect(databaseLink, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(PORT, () => {
        console.info(`App is listening on ${PORT}`)
    })
})

//middlewares- body-parser is now part of the express package
/*app.use(express.json())*/ app.use(bodyParser.json());


//routes
app.use(bookRoute)
