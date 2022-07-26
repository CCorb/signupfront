const mongoose = require('mongoose')

const contractTemplate = new mongoose.Schema({
  contractName: {
    type: String,
    required: true,
  },
  contractDate: {
    type: Date,
    required: false,
  },
  contractUser: {
    type: String,
    required: true,
  },
  contractBinaries: [
    {
      fileType: {
        type: String,
        required: true,
      },
      documentName: {
        type: String,
        required: true,
      },
      documentDate: {
        type: Date,
        required: false,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
  contractType: {
    type: String,
    required: true,
  },
  contractService: {
    type: String,
    required: false,
  },
  contractPrice: {
    price: {
      type: String,
      required: true,
    },
    recurrence: {
      type: String,
      required: true,
    },
  },
})
module.exports = mongoose.model('Contracts', contractTemplate)
