import swaggerAutogen from 'swagger-autogen';
//http://localhost:3000/api-docs/
const doc = {
  info: {
    title: 'API de Provincias',
    description: 'API REST para gestionar provincias',
    version: '1.0.0',
  },
  host: 'localhost:4000',
  basePath: '/api/province',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Province: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        nombre: {
          type: 'string',
          example: 'Buenos Aires',
        },
        nombrecompleto: {
          type: 'string',
          example: 'Provincia de Buenos Aires',
        },
        latitud: {
          type: 'number',
          example: -34.6037,
        },
        longitud: {
          type: 'number',
          example: -58.3816,
        },
        displayorder: {
          type: 'integer',
          example: 1,
        },
      },
      required: ['nombre', 'nombrecompleto', 'latitud', 'longitud', 'displayorder'],
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['index.js', './src/controllers/province-controller.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);



// Explicación breve de la implementación de Swagger
// Usamos dos herramientas complementarias:

// 1️⃣ swagger-autogen (swagger.js)
// Genera automáticamente la especificación OpenAPI (swagger-output.json)
// Lee los comentarios JSDoc en tus endpoints (ej: #swagger.tags, #swagger.summary)
// Crea un archivo JSON con toda la documentación de tu API
// 2️⃣ swagger-ui-express (index.js)
// Sirve la interfaz visual de Swagger
// En la ruta /api-docs muestra la documentación interactiva
// Lee el archivo generado por swagger-autogen