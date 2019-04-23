module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      houseId: DataTypes.INTEGER,
      taskId: DataTypes.INTEGER,  
      status: {type: DataTypes.BOOLEAN},
      frequency: {type: DataTypes.STRING, allowNull: true},
      owner: {type: DataTypes.STRING, allowNull: false},
      date: {type: DataTypes.DATE, allowNull: false},
    
    });
  
    return Task;
  };
  