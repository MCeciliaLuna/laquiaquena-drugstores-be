const Usuario = require('../modelos/usuario')
const bcrypt = require('bcrypt')

const crearUsuario = async (req,res) => {
  const { email, contraseña, role } = req.body;

  const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

  try {
    const nuevoUsuario = new Usuario({
      email,
      contraseña: contraseñaEncriptada,
      role
       })
       await nuevoUsuario.save()
       res.status(201).json({ message: "Usuario creado", nuevoUsuario });
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message });
  }
}

module.exports = { crearUsuario }