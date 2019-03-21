module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member",
    { name: DataTypes.STRING }
  );

  Member.associate = function(models) {
    Member.belongsTo(models.House, {
      foreignKey: {
        name: 'id'
      }
    }); 
  };

  return Member;
};