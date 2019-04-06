'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Task', {
      houseId: Sequelize.INTEGER,
      taskId: Sequelize.INTEGER,
      status: {
        type: Sequelize.BOOLEAN
      },
      frequency: {
        type: Sequelize.STRING,
        allowNull: true
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Task');
  }
};