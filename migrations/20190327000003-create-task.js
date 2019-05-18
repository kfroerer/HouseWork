'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      houseId: Sequelize.INTEGER,
      taskId: Sequelize.INTEGER,
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
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
      description: {type: Sequelize.STRING},
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
    return queryInterface.dropTable('Tasks');
  }
};