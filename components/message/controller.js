const store = require('./store')

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] Invalid input data')
      reject('Invalida input data!');
      return false
    } else {
      const fullMessage = {
        user,
        message,
        created_date: new Date()
      };
      store.add(fullMessage);
      resolve(fullMessage);
    }
  })
}

const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
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

module.exports = { 
  addMessage,
  getMessages,
  updateMessage
}