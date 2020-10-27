const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  }
},{
  technician: {
    type: String,
    required: true
  }
},{
  salon: {
  type: String,
  required: true
  }
},{
  username: {
  type: String,
  required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;