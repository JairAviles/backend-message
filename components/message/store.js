const Model = require('./model')

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

const removeMessage = (id) => {
  return Model.deleteOne({
    _id: id
  });
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
  remove: removeMessage,
  update: updateText,
}
