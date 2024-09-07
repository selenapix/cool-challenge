const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining the Reaction schema
const reactionSchema = new Schema ({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => {
      return new Date (createdAt).toLocaleString(); 
    }
  }
});


module.exports = mongoose.model('Reaction', reactionSchema);