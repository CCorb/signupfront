const mongoose = require('mongoose')

const videosTemplate = new mongoose.Schema({
  videoName: {
    type: String,
    required: true,
  },
  videoCategory: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('videos', videosTemplate)
