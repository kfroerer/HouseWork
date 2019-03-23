module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define("Task", {
    status: {
      type: DataTypes.BOOLEAN
    },
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    roomId: {type: DataTypes.INTEGER, allowNull: false},
  
  });

  task.associate = function(models) {
    task.belongsTo(models.Room, {
      foreignKey: {
        name: "roomId"
      }
    });
    task.belongsToMany(models.House, {
       through: "task_house",
       foreignKey: "taskId"
       })
    
  };

  return task;
};
