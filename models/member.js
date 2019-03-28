module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define("Member", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
   
    return Member;
  };
  