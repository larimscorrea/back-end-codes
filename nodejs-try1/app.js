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

app.listen(2612, () => {
  console.log('Servidor iniciado na porta 2612.');
  
});

app.listen();

