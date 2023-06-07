const express = require('express');
const cors = require('cors');
const todoController = require('./controller/todoController');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/criarTodo', todoController.criarTodo);
app.get('/todos', todoController.obterTodos);
app.delete('/todos/:id', todoController.excluirTodo);
app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
