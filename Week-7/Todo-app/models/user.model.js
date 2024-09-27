const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    }
  }, { timestamps: true }); 

const userModel = mongoose.model("users",userSchema)
module.exports=userModel;