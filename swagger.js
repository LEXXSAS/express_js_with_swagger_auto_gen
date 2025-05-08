const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Express js swagger test',
    description: 'Express js swagger test'
  },
  host: 'localhost:8888',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']
const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js');
});
