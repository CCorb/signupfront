const mongoose = require('mongoose')

const scheduleTemplate = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  appointmentName: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  appointmentTimeFrom: {
    type: String,
    required: true,
  },
  appointmentTimeTo: {
    type: String,
    required: true,
  },
  appointmentMembers: [
    {
      id: String,
      fullName: String,
    },
  ],
})
module.exports = mongoose.model('Appointments', scheduleTemplate)
