'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tasks", [
      {
        status: false,
        roomId: 1,
        title: "Clean toilet",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Brush bowl and clean all surfaces",
        createdAt: Sequelize.DATETIME,
        updatedAt: Sequelize.DATETIME

      },
      {
        status: false,
        roomId: 2,
        title: "Do Dishes",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Empty, fill, then run dishwasher",
        createdAt: Sequelize.DATETIME,
        updatedAt: Sequelize.DATETIME
      },
      {
        status: false,
        roomId: 3,
        title: "Dust",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Dust all hard surfaces",
        createdAt: Sequelize.DATETIME,
        updatedAt: Sequelize.DATETIME
      },
      {
        status: false,
        roomId: 4,
        title: "Clean Floor",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Vacuum or sweep and mop",
        createdAt: Sequelize.DATETIME,
        updatedAt: Sequelize.DATETIME
      },        
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
         return queryInterface.bulkDelete('tasks', null, {});
  }
};