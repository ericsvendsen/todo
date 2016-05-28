'use strict';

var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({ host: '0.0.0.0', port: 8080, labels: ['api'] });

server.register([
    {
        register: require('./models/category'),
        options: {}
    }, require('vision'), require('inert'), require('./models/project'), require('./models/task') 
], function (err) {
    if (err) {
        console.log(err);
    }
});