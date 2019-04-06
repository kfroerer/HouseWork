"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("defaultTasks", [
      {
        status: false,
        title: "Clean toilet",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Brush bowl and clean all surfaces",
        roomId: 1
      },
      {
        status: false,
        title: "Clean shower",
        frequency: "Bi-weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description:
          "Scrub all shower walls top to bottom and rinse with water",
        roomId: 1
      },
      {
        status: false,
        title: "Clean medicine cabinet",
        frequency: "Bi-weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Empty the cabinet and wipe down shelves",
        roomId: 1
      },
      {
        status: false,
        title: "Shine the mirror",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description:
          "Spray mirror with glass cleaner and wipe off in circular motion",
        roomId: 1
      },
      {
        status: false,
        title: "Take out the trash",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Collect and dispose of the trash",
        roomId: 1
      },
      {
        status: false,
        title: "Wipe down sink and counter",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Spray and clean all bathroom surfaces",
        roomId: 1
      },
      {
        status: false,
        title: "Clean out drawers",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Sort and throw unwanted items",
        roomId: 1
      },
      {
        status: false,
        title: "Do Dishes",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Empty, fill, then run dishwasher",
        roomId: 2
      },
      {
        status: false,
        title: "Clean countertops",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Clean all surfaces",
        roomId: 2
      },
      {
        status: false,
        title: "Take out the trash",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Collect and dispose of the trash",
        roomId: 2
      },
      {
        status: false,
        title: "Clean out fridge",
        frequency: "Bi-Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Throw away any old food and scrub shelves",
        roomId: 2
      },
      {
        status: false,
        title: "Clean microwave",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Spray and clean all walls and door",
        roomId: 2
      },
      {
        status: false,
        title: "Clean the oven",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Spray with cleaner, scrub all walls and door",
        roomId: 2
      },
      {
        status: false,
        title: "Clean out pantry",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Throw away old items and clean shelves",
        roomId: 2
      },
      {
        status: false,
        title: "Dust",
        frequency: "Bi-weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Dust all hard surfaces",
        roomId: 3
      },
      {
        status: false,
        title: "Vacumn",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Vacumn all carpeted areas",
        roomId: 3
      },
      {
        status: false,
        title: "Pick up clutter",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Pick up and put away items",
        roomId: 3
      },
      {
        status: false,
        title: "Spot clean upholstery and rug",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Deep clean any stains on furniture and rug",
        roomId: 3
      },
      {
        status: false,
        title: "Sort mail",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Organize mail",
        roomId: 3
      },
      {
        status: false,
        title: "Deep clean carpets",
        frequency: "Annually",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Move all furniture and clean carpets and rugs",
        roomId: 3
      },
      {
        status: false,
        title: "Clean vents",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Clean all vents in home",
        roomId: 3
      },
      {
        status: false,
        title: "Clean the garage",
        frequency: "Annually",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Sort and organize items in the garage",
        roomId: 4
      },
      {
        status: false,
        title: "Clean basement or attic",
        frequency: "Annually",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Organize and remove any unused items",
        roomId: 4
      },
      {
        status: false,
        title: "Laundry",
        frequency: "Weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Wash, sort and fold laundry",
        roomId: 4
      },
      {
        status: false,
        title: "Make Bed",
        frequency: "Daily",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Make up the bed in the morning",
        roomId: 4
      },
      {
        status: false,
        title: "Wash sheets and pillows",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Remove and wash all bedding",
        roomId: 4
      },
      {
        status: false,
        title: "Organize nightstand",
        frequency: "Bi-weekly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Clean and organize drawers and top of nightstand",
        roomId: 4
      },
      {
        status: false,
        title: "Organize closets",
        frequency: "Monthly",
        owner: "Member 1",
        date: "2019-03-23 00:00:00",
        description: "Remove any unwanted items and put away clothing",
        roomId: 4
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tasks", null, {});
  }
};
