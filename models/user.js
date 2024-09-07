const mongoose = require('mongoose'); // Requiring Mongoose
const { Schema } = mongoose;

//Defining userSchema with specified fields and requirements
const userSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']  //This pattern is checking for at least one character before the @ symbol
  },
  thoughts: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }
]
});

//creating a virtual friend count
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);

//Exporting User for use in other parts of the app
module.exports = User;