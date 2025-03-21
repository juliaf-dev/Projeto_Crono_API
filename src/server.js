const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota básica para verificar o status da API
app.get('/api/status', (req, res) => {
  res.json({ status: 'Deu certo ebaa' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Api rodando em http://localhost:${port}`);
});


const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API PLATAFOMA ESTUDOS DE HISTORIA',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));