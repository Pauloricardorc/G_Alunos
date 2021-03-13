const express = require('express');
const routes = express.Router();

const routesController = require('./controllers/routesController');
const filterController = require('./controllers/filterController');

// ----------------------RoutesControllers---------------------- //
routes.get('/list', routesController.list);
routes.post('/create', routesController.create);
routes.delete('/delete/:id', routesController.delete);
routes.put('/update/:id', routesController.update);
// ------------------------------------------------------------ //
routes.get('/modal/:id', filterController.modal);
routes.get('/filter', filterController.filter);

module.exports = routes;
