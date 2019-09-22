const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', (req, res) => {
  controller.listChats()
    .then(chats => {
      response.success(req, res, chats, 200);
    })
    .catch(err =>{
      response.error(req,res, 'Interal Server Error', 500);
    })
})

router.post('/', (req, res) => {

})

module.exports = router
