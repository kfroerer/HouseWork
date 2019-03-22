module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true}
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Room, {
      foreignKey: {
        name: "id"
      }
    });
    // Task.belongsToMany(models.House, {
    //    through: task_house,
    //    foreignKey: "taskId"
    //    })
    
  };

  return Task;
};
