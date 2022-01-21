const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});
module.exports = Contact = mongoose.model("contact", contactschema);
