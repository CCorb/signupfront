const mongoose = require('mongoose')

const productTemplate = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: [
    {
      price: {
        type: String,
        required: true,
      },
      recurrence: {
        type: String,
        required: true,
      },
    },
  ],
})
module.exports = mongoose.model('Products', productTemplate)
