const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
})

router.get('/', (req, res) => { 
  controller.getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    })
})

module.exports = router
