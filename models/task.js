module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {type: DataTypes.STRING, allowNull: false},
    frequency: {type: DataTypes.STRING, allowNull: false}

  });

  Task.associate = function(models) {
    Task.belongsToMany(models.Area, {
      foreignKey: {
        name: "id"
      }
    });
    
  };

  return Task;
};
