const Todo = require('../db');

// Função para criar um novo todo
exports.criarTodo = (req, res) => {
  const todoText = req.body.todo;

  Todo.create({ Todo: todoText })
    .then(todo => {
      res.json({ todo: todo.Todo });
    })
    .catch(error => {
      console.error('Erro ao criar o todo:', error);
      res.status(500).json({ error: 'Erro ao criar o todo' });
    });
};
exports.obterTodos = (req, res) => {
 Todo.findAll()
   .then(todos => {
     res.json(todos);
   })
   .catch(error => {
     console.error('Erro ao obter todos os todos:', error);
     res.status(500).json({ error: 'Erro ao obter todos os todos' });
   });
};
exports.excluirTodo = (req, res) => {
 const todoId = req.params.id;

 Todo.destroy({ where: { idTodo: todoId } })
   .then(() => {
     res.json({ message: 'Todo excluído com sucesso' });
   })
   .catch(error => {
     console.error('Erro ao excluir o todo:', error);
     res.status(500).json({ error: 'Erro ao excluir o todo' });
   });
};