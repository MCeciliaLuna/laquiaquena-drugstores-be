const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producto = new Schema ({
  nombre: {
    type: String,
    required: [true, "El nombre de usuario es necesario"]
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es necesaria"]
  },
  precio: {
    type: Number,
    required: [true, "El precio es necesario"]
  },
  image: {
    public_id: String,
    secure_url: String
  }
})

module.exports = mongoose.model('Producto', producto)