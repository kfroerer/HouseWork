'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("rooms", [
      {
        name: "bathroom"
      },
      {
        name: "kitchen"
      },
      {
        name: "living room"
      },
      {
        name: "bedroom"
      },
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('rooms', null, {});
  }
};
