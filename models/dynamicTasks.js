'use strict'
module.exports = (sequelize, DataTypes) => {
    const DynamicTasks = sequelize.define("DynamicTasks", {
        houseId: DataTypes.INTEGER,
        taskId: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {});
    return DynamicTasks
};