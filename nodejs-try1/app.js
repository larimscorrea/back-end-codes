// const express = require('express');
// const app = express();


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.send('Dados recebidos com sucesso!');

});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
  
});

app.listen();

var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Outra forma de escrever o de cima com menos código.
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

