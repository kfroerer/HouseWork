module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      houseId: {
        type: DataTypes.INTEGER,
        references: {
          model: "House",
          key: "id"
        }
      },
      taskId: {
        type: DataTypes.INTEGER,  
        refereces: {
          model: "defaultTask",
          key: "id"
        }
      },
      status: {type: DataTypes.BOOLEAN},
      frequency: {type: DataTypes.STRING, allowNull: true},
      owner: {type: DataTypes.STRING, allowNull: false},
      date: {type: DataTypes.DATE, allowNull: false},
    
    });
  
    return Task;
  };
  