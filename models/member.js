"use strict";
var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define(
    "Member",
    {
      username: {type: DataTypes.STRING, allowNull: false},
      password: { type: DataTypes.STRING, allowNull: true},
      email: { type:DataTypes.STRING, allowNull: true},
      manager: DataTypes.BOOLEAN
    },
    {
      //do I need to specify to do the hook only if email password is there?
      hooks: {
        beforeCreate: function(member) {
          var salt = bcrypt.genSaltSync();
          member.password = bcrypt.hashSync(member.password, salt);
        }
      }
    }
  );

  Member.associate = function(models) {
    // or does it need to be hasOne
    Member.belongsTo(models.House{
      foreignKey: {
        name: 'id'
      }
    }); 

    // Member.create({
    //   username: "bball",
    //   password: "something",
    //   email: "something@email.com",
    // }).then(function(members) {
    //   models.House.create({ name: "Titan" })
    //     .then(function(account) {
    //       models.House.update(
    //         { MemberID: member.dataValues.id },
    //         { where: { id: house.dataValues.id } }
    //       );
    //     })
    //     .then(function() {
    //       return models.House.findAll();
    //     })
    //     .then(function() {
    //       //this can be used to test what is returning, put a callback in the future
    //       console.log("House");
    //     });
    // });
  };

  Member.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Member.sync();
  return Member;
};