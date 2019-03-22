module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Room.associate = function(models) {
    Room.belongsTo(models.House, {
      foreignKey: {
        name: "id"
      }
    });
    Room.hasMany(models.Task, {
      foreignKey: {
        name: "id"
      },
      onDelete: "cascade"
    });
  };

  return Room;
};
