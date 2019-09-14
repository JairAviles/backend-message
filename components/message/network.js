const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', (req, res) => {
  controller.getMessages()
  .then(messageList => {
    response.success(req, res, messageList, 200);
  })
  .catch(err => {
    response.error(req, res, 'Unexpected error', 500, err);
  });
})

router.post('/', (req, res) => {
  const { user, message } = req.body;
  controller.addMessage(user, message)
  .then((fullMessage) => {
    response.success(req, res, fullMessage, 201)
  }).catch(err => {
    console.error(err)
    response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
  });
})

router.delete('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  // res.status(200).send({error: '', body: 'Eliminado correctamente'});
  response.success(req, res, 'Eliminado  correctamente');
})

module.exports = router
