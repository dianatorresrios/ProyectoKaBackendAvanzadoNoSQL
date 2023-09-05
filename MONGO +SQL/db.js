const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cineDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

module.exports = db;
