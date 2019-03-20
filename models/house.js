module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define("House", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  House.associate = function(models) {
    House.hasMany(models.Member, {
      // DO I need to specify????? 
      // foreignKey: {
      //   name: "userId"
      // }
    });
    House.hasMany(models.Area, {
      // foreignKey: {
      //   name: "uid"
      // }
    });
  };

  return House;
};
