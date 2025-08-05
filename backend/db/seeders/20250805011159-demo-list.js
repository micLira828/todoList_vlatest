'use strict';
const {List} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await List.bulkCreate([



      {
        title:"Grocery list",
        description: "A list of groceries to buy",
        createdAt: new Date(),
        userId: 1,
      },
       {
        title:"Daily Todos",
        description: "A list of general todos for the day",
        createdAt: new Date(),
        userId: 2,
      },  {
        title:"Household Chores",
        description: "A list of errands for the household",
        createdAt: new Date(),
        userId: 3,
      }],{validate:true} )
   
  },

 async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Lists';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [
    Op.in
     ]: [1] }
    }, {});

  }
}; 

