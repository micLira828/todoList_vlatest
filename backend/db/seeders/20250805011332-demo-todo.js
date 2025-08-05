'use strict';
const {Todo} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Todo.bulkCreate([

      {
        listId: 1,
        userId: 3,
        title: "Cheddar Cheese",
        description: "Make sure it is pasteurized",
        priority: "1",
        dueDate: new Date('2025-10-01'),
        checked: true,
        createdAt:Date.now(),
       },
       {
        listId: 2,
        userId: 2,
        title: "File Taxes",
        description: "Nobody wants to do it, so might as well put it in here",
        priority: "1",
        dueDate: new Date('2025-10-01'),
        checked: true,
        createdAt:Date.now(),
       },
       {
        listId: 3,
        userId: 3,
        title: "Clean Dining Room",
        description: "Set the table before guests arrive tonight",
        priority: "1",
        dueDate: new Date('2025-10-01'),
        checked: true,
        createdAt:Date.now(),
       },



    ], { validate: true, });
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Todos';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      listId: { [
Op.in
]: [1,31] },
      userId: { [
Op.in
]: [1,7] },
    }, {});

  }
}; 

