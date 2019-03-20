module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Area.associate = function(models) {
    Area.belongsToMany(models.House, {
      foreignKey: {
        name: "id"
      }
    });
    Area.hasMany(models.Task, {
      foreignKey: {
        name: "id"
      }
    });
  };

  return Area;
};
