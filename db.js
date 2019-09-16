const db = require('mongoose');

db.Promise = global.Promise;

const connect = async (url) => {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('[db] Conectado con exito');
}

module.exports = connect
