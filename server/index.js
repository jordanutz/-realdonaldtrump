const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const controller = require('./tweets_controller')


app.post('/api/tweets', controller.createTweet)

PORT = 1993;
app.listen( PORT, () => {
  console.log(`You are listening on Port ${PORT}`)
})
