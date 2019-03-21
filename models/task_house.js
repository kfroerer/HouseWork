'use strict';
module.exports = (sequelize, DataTypes) => {
  const task_house = sequelize.define('task_house', {
    status: DataTypes.BOOLEAN
  }, {});
  task_house.associate = function(models) {
    // associations can be defined here
  };
  return task_house;
};