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
  time: {
    type: Number,
    required: true,
    unique: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;