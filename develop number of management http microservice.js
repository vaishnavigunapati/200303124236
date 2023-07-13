const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const apiProxy = httpProxy.createProxyServer();
const userService = 'http://localhost:3001';
const productService = 'http://localhost:3002';
app.get('/users', (req, res) => {
  apiProxy.web(req, res, { target: userService });
});
 
app.get('/products', (req, res) => {
  apiProxy.web(req, res, { target: productService });
});
 
app.listen(3000, () => {
  console.log('API Gateway listening on port 3000');
});

