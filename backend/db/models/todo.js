'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const columnMapping = {
      through: 'ListTodo', // model name referencing the join table
      foreignKey: 'listId',
      otherKey: 'todoId'
      };
      Todo.belongsToMany(models.List, columnMapping);
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    listId: DataTypes.INTEGER,
    checked: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};