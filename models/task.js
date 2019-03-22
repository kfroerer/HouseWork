module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: false},
  });


  
  Task.associate = function(models) {
    Task.belongsTo(models.Area, {
      foreignKey: {
        name: "uid"
      }
    });
    // Task.belongsToMany(models.House, {
    //    through: task_house,
    //    foreignKey: "taskId"
    //    })
    
  };

  return Task;
};
