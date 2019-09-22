const chat = require('../components/chat/network')
const message = require('../components/message/network');
const user = require('../components/user/network')

const routes = (server) => {
  server.use('/chat', chat);
  server.use('/message', message);
  server.use('/user', user);
}

module.exports = routes