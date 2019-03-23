module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    status: {
      type: DataTypes.BOOLEAN
    },
    houseId: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true}
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Room, {
      foreignKey: {
        name: "taskId"
      }
    });
    // Task.belongsToMany(models.House, {
    //    through: task_house,
    //    foreignKey: "taskId"
    //    })
    
  };

  return Task;
};
