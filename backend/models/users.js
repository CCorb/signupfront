const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
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
  signupDate: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Users', signupTemplate)
