const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeSchema = new Schema({
  name: { type: String, required: [true, 'Name is necessary'] },
  imageUrl: { type: String },
  description: { type: String },
});

module.exports = mongoose.model('Home', homeSchema);
