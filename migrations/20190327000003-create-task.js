'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Task', {
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
      title: {type: Sequelize.STRING, allowNull: false},
      frequency: {type: Sequelize.STRING, allowNull: true},
      owner: {type: Sequelize.STRING, allowNull: false},
      date: {type: Sequelize.DATE, allowNull: false},
      description: {type: Sequelize.TEXT, allowNull: true}
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Task');
  }
};