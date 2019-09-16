const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', (req, res) => {
  const filterUser = req.query.user || '';
  controller.getMessages(filterUser)
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

router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  controller.updateMessage(req.params.id, req.body.message)
    .then((data)=> {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'Error interno', 500, err)
    });
})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch(err => {
      response.error(req, res, 'Error interno', 500, err)
    });
  
})

module.exports = router
