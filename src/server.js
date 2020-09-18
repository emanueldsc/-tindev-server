const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb://tindev:tindev123@ds233278.mlab.com:33278/tindev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = process.env.port || 3333;
server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));