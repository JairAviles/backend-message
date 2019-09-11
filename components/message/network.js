const express = require('express');
const router = express.Router();

const response = require('../../network/response')

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
      "custom-header": "Any value"
  });
  response.success(req, res, 'Lista de mensajes');
  })

router.post('/', (req, res) => {
// res.status(201).send({error: '', body: 'Creado correctamente'});
if (req.query.error == 'ok') {
  response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
} else {
  response.success(req, res, 'Creado correctamente', 201);
}
})

router.delete('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  // res.status(200).send({error: '', body: 'Eliminado correctamente'});
  response.success(req, res, 'Eliminado  correctamente');
})

module.exports = router
