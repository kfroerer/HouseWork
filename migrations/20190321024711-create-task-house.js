'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('task_house', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      houseId: {type: Sequelize.INTEGER},
      taskId: {type: Sequelize.INTEGER}
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('task_house');
  }
};