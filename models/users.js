const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role:{
    type:String,
    enum:["admin","user"],
    default: "user"
  }
});

const UserModel = mongoose.model('User', userSchema)

module.exports ={ UserModel }