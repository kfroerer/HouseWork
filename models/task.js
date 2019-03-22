module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: true},
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
