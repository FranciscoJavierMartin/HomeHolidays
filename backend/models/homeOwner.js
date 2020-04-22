const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeOwnerSchema = new Schema({
  name: { type: String, required: [true, 'Name is necessary']},
}, { collection: 'homeOwners' });

module.exports = mongoose.model('HomeOwner', homeOwnerSchema);