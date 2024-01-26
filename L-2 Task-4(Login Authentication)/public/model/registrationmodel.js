const { mongoose } = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone_num: Number,
  password: String,
  confirm: String,
  gender: String,
});

const registration = mongoose.model("Registration", registrationSchema);
module.exports = registration;
