module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    status: {
      type: DataTypes.BOOLEAN
    },
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
  
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Room, {
      foreignKey: {
        name: "roomId"
      }
    });
    Task.belongsToMany(models.House, {
       through: "task_house",
       foreignKey: "taskId"
       })
    
  };

  return Task;
};
