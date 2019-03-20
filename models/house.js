module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define("House", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  House.associate = function(models) {
    House.hasMany(models.Member, {
      foreignKey: {
        name: "id"
      }
    });
    House.hasMany(models.Area, {
      foreignKey: {
        name: "id"
      }
    });
  };

  return House;
};
