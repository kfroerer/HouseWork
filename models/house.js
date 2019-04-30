'use strict';
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define(
    "House", 
    {
        // id: {type: DataTypes.INTEGER, primaryKey: true},
        username: { type: DataTypes.STRING, allowNull:false },
        password: { type: DataTypes.STRING, allowNull: false},
    
    },

    {
      hooks: {
        beforeCreate: function(member) {
          var salt = bcrypt.genSaltSync();
          member.password = bcrypt.hashSync(member.password, salt);
        }
      }
    },
    {});

  House.associate = models => {
    House.hasMany(models.Member, {as: 'members', foreignKey: 'HouseId'});
    

    House.belongsToMany(models.defaultTask, { 
      foreignKey: 'houseId',
      through: models.Task,
      as: 'task'
     })
  };

  House.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };


  House.sync();

  return House;
};
