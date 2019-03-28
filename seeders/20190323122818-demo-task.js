'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tasks", [
      {
        title: "Clean toilet",
        frequency: "Weekly",
        description: "Brush bowl and clean all surfaces",
        roomId: 1,
        status: false,

      },
      {
        title: "Do Dishes",
        frequency: "Daily",
        description: "Empty, fill, then run dishwasher",
        roomId: 2,
        status: false,
        

      },
      {
        title: "Dust",
        frequency: "Bi-Weekly",
        description: "Dust all hard surfaces",
        roomId: 3,
        status: false,
        

      },
      {
        title: "Wax Floor",
        frequency: "Monthly",
        description: "Vacuum or sweep and mop",
        roomId: 4,
        status: false,
        

      },        
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
         return queryInterface.bulkDelete('tasks', null, {});
  }
};
