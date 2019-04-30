'use strict'
module.exports = (sequelize, DataTypes) => {
    const defaultTask = sequelize.define("defaultTask", {
        // id: {type: DataTypes.INTEGER, primaryKey: true},
        title: {type: DataTypes.STRING, allowNull: false},
        frequency: {type: DataTypes.STRING, allowNull: true},
        description: {type: DataTypes.TEXT, allowNull: true},
        roomId: {type: DataTypes.INTEGER, allowNull: false},
        status: {type: DataTypes.BOOLEAN},

    }, {});

    defaultTask.associate = (models) => {
        defaultTask.belongsTo(models.Room, {
          foreignKey: {
            name: "roomId"
          }
        });
        defaultTask.belongsToMany(models.House, {
          foreignKey: "taskId",
           through: models.Task,
           as: 'house'
           })
        
      };

    return defaultTask
};