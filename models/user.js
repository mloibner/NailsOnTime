const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
},{
  name: {
    type: String,
    required: true
  }
},{
  email: {
  type: String,
  required: true,
  unique: true
  }
},{
  phone: {
    type: Number,
    required: true,
    unique: true,
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;
