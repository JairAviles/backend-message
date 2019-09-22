const Model = require('./model')

const addChat = (chat) => {
  const newChat = new Model(chat);
  return newChat.save();
}

const getChats = async () => {
  return Model.find();
}

module.exports = {
  add: addChat,
  list: getChats
}
