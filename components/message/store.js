const db = require('mongoose');
const Model = require('./model')

db.Promise = global.Promise;
db.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('[db] Conectado con exito')

const list = [];

const addMessage = (message) => {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessages = async () => {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages
}
