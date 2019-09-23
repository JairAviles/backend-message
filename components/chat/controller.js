const store = require('./store')

const addChat = (users) => {
  if (!users || !Array.isArray(users)) {
      return Promise.reject('Invalid users data');
  }

  const chat = {
    users
  }
  return store.add(chat);
}

const listChats = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId));
  })
}

module.exports = { 
  addChat,
  listChats
}
