const { Sequelize, INTEGER, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Todo', 'root', '30242616Familia_', {
 host: 'localhost',
 dialect: 'mysql'
});
sequelize.authenticate().then(function () {
 console.log('Sucess')
}).catch(function (err) { console.log(err + 'erro') })


const Todo = sequelize.define('todo', {
 idTodo: {
  type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
 },
 Todo: {
  type:DataTypes.TEXT
 }
})

Todo.sync({force:true})

module.exports = Todo