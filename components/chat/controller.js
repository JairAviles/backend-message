const store = require('./store')

const addChat = (users) => {
  if (!users || typeof users  !== Array || users.length !== 2) {
      return Promise.reject('Invalid users data');
  }

  const chat = {
      users
  }

  return store.add(chat);
}

const listChats = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  })
}

module.exports = { 
  addChat,
  listChats
}
