const Model = require('./model')

const addChat = (chat) => {
  const newChat = new Model(chat);
  return newChat.save();
}

const listChats = async (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId) {
      filter = {
        users: userId
      }
    }
    
     Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  })
}

module.exports = {
  add: addChat,
  list: listChats
}
