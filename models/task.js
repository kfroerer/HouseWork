module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    houseId: {type: Sequelize.INTEGER},
    title: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: true},
    owner: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},


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
