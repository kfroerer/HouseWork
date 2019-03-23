'use strict';
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define(
    "House", 
    {
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
    }


  );

  House.associate = function(models) {
    House.hasMany(models.Member, {
      foreignKey: {
        name: "houseId"
      }
    });

    House.belongsToMany(models.Task, { 
      through: "task_house",
      foreignKey: 'taskId'
     })
  };

  House.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };


  House.sync();

  return House;
};
