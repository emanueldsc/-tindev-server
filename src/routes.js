const express = require('express');

const routes = express.Router();

// test de conexão
routes.get('/', (req, res) => { return res.status(200).json({ connected: true }) });

// imports
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// DevController
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

// LikeController
routes.post('/devs/:userId/likes', LikeController.store);

// DislikeController
routes.post('/devs/:userId/dislikes', DislikeController.store);

module.exports = routes;