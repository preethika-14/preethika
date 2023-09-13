const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://Deepika0123:8ShdjTS75FciJ7VK@cluster0.0v3gpxw.mongodb.net/';
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
require('./locations');