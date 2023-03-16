const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedido = new Schema({
  apellido:{
    type: String,
    trim: true,
    uppercase: true,
    required: true
  },
  nombre:{
    type: String,
    trim: true,
    uppercase: true,
    required: true
  },
    pedido:{
    type: String,
    trim: true,
    required: true
},
precio:{
  type: Number,
  trim: true,
  required: true
},
pago:{
  type: String,
  trim: true,
  enum: ["NO PAGADO", "PAGADO"],
  default: "NO PAGADO"
},
entrega: {
  type: String,
  trim: true,
  enum: ["RETIRO DEL LOCAL", "ENVIO"],
    default: "RETIRO DEL LOCAL"
},
  direccion:{
    type: String,
    trim: true,
  },
  aclaracion:{
    type: String,
    trim: true,
  },
  drugstore:{
    type: String,
    trim: true,
    required: true
  },
    telefono:{
      type: Number,
      trim: true,
      required: true
    },
  datetime:{
    type: String,
    trim: true,
    required: true
  }
}
);


module.exports = mongoose.model('Pedido', pedido)