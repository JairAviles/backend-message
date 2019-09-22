const Model = require('./model')

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessages = async (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser) {
      filter = { user: filterUser };
    }
    const messages = Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  })
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
