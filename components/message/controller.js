const store = require('./store')
const socket = require('../../socket').socket;

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] Invalid input data')
      reject('Invalida input data!');
      return false
    } else {
      let fileUrl = ''
      if (file) {
        fileUrl = 'http://localhost:3000/app/files/' + file.filename;
      }

      const fullMessage = {
        chat,
        user,
        message,
        created_date: new Date(),
        file: fileUrl
      };
      store.add(fullMessage);

      socket.io.emit('message', fullMessage);

      resolve(fullMessage);
    }
  })
}

const getMessages = (filterMessages) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterMessages));
  })
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if(!id || !message) {
      reject('Invalid data');
      return false;
    }
    const res = await store.update(id, message);
    resolve(res);
  })
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid id');
      return false;
    }

    store.remove(id)
    .then(() => {
      resolve();
    })
    .catch(e => {
      reject(e);
    });
  })
}

module.exports = { 
  addMessage,
  deleteMessage,
  getMessages,
  updateMessage
}
