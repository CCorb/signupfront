const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routesUrl = require('./routes/routes')
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log('Database connected')

  //console.log(mongoose.model('Users').find())
})

// activate bodyparser
app.use(express.json())
//activate cors
app.use(cors())
// activate routing
app.use(fileUpload())
app.use('/app', routesUrl)

// for serving the frontend-build
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//starting server
app.listen(4000, () => {
  console.log('Server is up and running on Port 4000')
})
