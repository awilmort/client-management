const ClientService = require('../services/ClientService');
const RouterFactory = require('./RouterFactory');
const express = require('express');

const Router = express.Router();


const routerFactory =  new RouterFactory(new ClientService()); 

Router.get('/', routerFactory.getAll);

Router.get('/:id', routerFactory.getById);

Router.post('/', routerFactory.create);

Router.put('/:id', routerFactory.update);

Router.delete('/:id', routerFactory.remove);

module.exports = Router;