const Pedido = require('../modelos/pedidos')

const crearPedido = async(req,res) => {
  try {
    const  {
      apellido,
      nombre,
      datetime,
      pedido,
      precio,
      telefono,
      entrega,
      drugstore,
      direccion,
      aclaracion,
      pago
    } = req.body
    
    const crearPedido = new Pedido({
      apellido,
      nombre,
      datetime,
      pedido,
      precio,
      telefono,
      entrega,
      drugstore,
      direccion,
      aclaracion,
      pago
    }
    )

  await crearPedido.save() 
  
    res.status(200).json(crearPedido)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

const traerPedidos = async(req,res) => {
  const totalPedido = await Pedido.find()
  res.json(totalPedido)
}

const eliminarPedido = async (req,res) => {
  const { _id } = req.params
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(_id)
    res.json({
      message: `Pedido ${pedidoEliminado} ELIMINADO correctamente`
    })
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
}

module.exports = { crearPedido, traerPedidos, eliminarPedido }