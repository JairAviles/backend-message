const express = require('express');
const app = express();
const server = require('http').Server(app)

const cors = require('cors');
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

// Define your own Mongodb String chaing connection ;)
db('');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
  console.log('Application is listening in http://localhost:3000')
});
