const mongoose = require('mongoose')

const userProductTemplate = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productIds: [
    {
      productId: {
        type: String,
        required: true,
      },
    },
  ],
})

module.exports = mongoose.model('UserProducts', userProductTemplate)
