'use strict';
// import {Todo} from './todo';
// import {List} from './list';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListTodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListTodo.init({
    listId: {
      type:DataTypes.INTEGER,
      references: {
      model: 'List', // or 'Bars' (table name)
      key: 'id',
      },
    },
    todoId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Todo', // or 'Bars' (table name)
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'ListTodo',
  });
  return ListTodo;
};