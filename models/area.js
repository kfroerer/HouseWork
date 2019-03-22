module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Area.associate = function(models) {
    Area.belongsTo(models.House, {
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
