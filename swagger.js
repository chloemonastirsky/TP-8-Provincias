import swaggerAutogen from 'swagger-autogen';
//http://localhost:3000/api-docs/
const doc = {
  info: {
    title: 'API de Provincias',
    description: 'API REST para gestionar provincias',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/api',
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
        name: {
          type: 'string',
          example: 'Buenos Aires',
        },
      },
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

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