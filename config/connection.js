//Importing Mongoose
const mongoose = require('mongoose');

//Connecting to MongoDB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SelenaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Exporting the connection to the database
module.exports = mongoose.connection