const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
  NumeroDeProducto: String,
  Nombre: String,
  Descripcion: String,
  
  
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Cliente', ProductoSchema);
