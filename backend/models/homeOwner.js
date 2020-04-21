const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeOwnerSchema = new Schema({
  name: { type: String, required: [true, 'Name is necesary']},
});

module.exports = mongoose.model('HomeOwner', homeOwnerSchema);