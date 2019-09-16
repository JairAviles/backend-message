const db = require('mongoose');
const Model = require('./model')

db.Promise = global.Promise;

// Add your own Mongodb String chaing connection ;)
db.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('[db] Conectado con exito')

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessages = async (filterUser) => {
  let filter = {}
  if (filterUser) {
    filter = { user: filterUser };
  }

  const messages = await Model.find(filter);
  return messages;
}

const updateText = async (id, message) => {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  foundMessage.updated_date = new Date()

  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateText
}
