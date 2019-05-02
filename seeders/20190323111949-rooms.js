'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("rooms", [
      {
        name: "bathroom",
        image: "https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__340.jpg",

      },
      {
        name: "kitchen",
        image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg",

      },
      {
        name: "living room",
        image: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg",

      },
      {
        name: "bedroom",
        image: "https://cdn.pixabay.com/photo/2016/12/08/03/53/pillow-1890940__340.jpg",

      },
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('rooms', null, {});
  }
};
