const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb://tindev:tindev123@ds233278.mlab.com:33278/tindev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, resm, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.port || 3333;
server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));