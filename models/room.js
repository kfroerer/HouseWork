module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: DataTypes.STRING
    });
  
    Room.associate = function(models) {
      // Room.belongsTo(models.House, {
      //   foreignKey: {
      //     name: "roomId"
      //   }
      // });
      Room.hasMany(models.Task, {
        foreignKey: {
          name: "taskId"
        },
        onDelete: "cascade"
      });
    };
  
    return Room;
  };
  