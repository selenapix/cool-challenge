const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

//Defining thoughtSchema with specified fields and requirements
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength:1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return new Date (createdAt).toLocaleString();
    }
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
   type: Schema.Types.ObjectId,
   ref: 'Reaction' 
  }]
});

//virtual field reactionCount to get length of reactions array
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

//Creating thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

//Exporting Thought for use in other parts of the app
model.exports = Thought; 