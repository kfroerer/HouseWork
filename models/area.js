module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Area.associate = function(models) {
    Area.belongsToMany(models.House, {
      // DO I need to specify????? 
      // foreignKey: {
      //   name: "userId"
      // }
    });
    Area.hasMany(models.Task, {
      // foreignKey: {
      //   name: "uid"
      // }
    });
  };

  return Area;
};
