'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
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
      List.belongsToMany(models.Todo, columnMapping);


    }
  }
  List.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};