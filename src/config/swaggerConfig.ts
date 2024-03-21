import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = swaggerJsdoc({
    failOnErrors: true,
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Moongate API',
        version: '0.0.1',
      },
    },
    apis: ['src/routes/**/*.ts']
  });

const router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;