"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Tasks", [
            {
                houseId: '2',
                taskId: '1',
                title: "Clean toilet",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description: "Brush bowl and clean all surfaces",
                date: '2019-05-17 12:00:00',
                roomId: 1
            },
            {
                houseId: '2',
                taskId: '2',
                title: "Clean shower",
                status: false,
                frequency: "Bi-weekly",
                owner: 'M',
                description:
                    "Scrub all shower walls top to bottom and rinse with water",
                    date: '2019-05-17 12:00:00',
                    roomId: 1
            },
            {
                houseId: '2',
                taskId: '3',
                title: "Clean medicine cabinet",
                status: false,
                frequency: "Bi-weekly",
                owner: 'M',
                description: "Empty the cabinet and wipe down shelves",
                date: '2019-05-17 12:00:00',
                roomId: 1
            },
            {
                houseId: '2',
                taskId: '4',
                title: "Shine the mirror",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description:
                    "Spray mirror with glass cleaner and wipe off in circular motion",
                    date: '2019-05-17 12:00:00',
                    roomId: 1
            },
            {
                houseId: '2',
                taskId: '5',
                title: "Take out the trash",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description: "Collect and dispose of the trash",
                date: '2019-05-17 12:00:00',
                roomId: 1
            },
            {
                houseId: '2',
                taskId: '6',
                title: "Wipe down sink and counter",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Spray and clean all bathroom surfaces",
                date: '2019-05-17 12:00:00',
                roomId: 1
            },
            {
                houseId: '2',
                taskId: '7',
                title: "Clean out drawers",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Sort and throw unwanted items",
                date: '2019-05-17 12:00:00',
                roomId: 1
            },
            {
                houseId: '2',
                taskId: '8',
                title: "Do Dishes",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Empty, fill, then run dishwasher",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '9',
                title: "Clean countertops",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Clean all surfaces",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '10',
                title: "Take out the trash",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description: "Collect and dispose of the trash",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '11',
                title: "Clean out fridge",
                status: false,
                frequency: "Bi-Weekly",
                owner: 'M',
                description: "Throw away any old food and scrub shelves",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '12',
                title: "Clean microwave",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Spray and clean all walls and door",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '14',
                title: "Clean the oven",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Spray with cleaner, scrub all walls and door",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '15',
                title: "Clean out pantry",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Throw away old items and clean shelves",
                date: '2019-05-17 12:00:00',
                roomId: 2
            },
            {
                houseId: '2',
                taskId: '16',
                title: "Dust",
                status: false,
                frequency: "Bi-weekly",
                owner: 'M',
                description: "Dust all hard surfaces",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '17',
                title: "Vacumn",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description: "Vacumn all carpeted areas",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '18',
                title: "Pick up clutter",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Pick up and put away items",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '19',
                title: "Spot clean upholstery and rug",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Deep clean any stains on furniture and rug",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '20',
                title: "Sort mail",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Organize mail",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '21',
                title: "Deep clean carpets",
                status: false,
                frequency: "Annually",
                owner: 'M',
                description: "Move all furniture and clean carpets and rugs",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '22',
                title: "Clean vents",
                status: false,
                owner: 'M',
                frequency: "Monthly",
                description: "Clean all vents in home",
                date: '2019-05-17 12:00:00',
                roomId: 3
            },
            {
                houseId: '2',
                taskId: '23',
                title: "Clean the garage",
                status: false,
                frequency: "Annually",
                owner: 'M',
                description: "Sort and organize items in the garage",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '24',
                title: "Clean basement or attic",
                status: false,
                frequency: "Annually",
                owner: 'M',
                description: "Organize and remove any unused items",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '25',
                title: "Laundry",
                status: false,
                frequency: "Weekly",
                owner: 'M',
                description: "Wash, sort and fold laundry",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '26',
                title: "Make Bed",
                status: false,
                frequency: "Daily",
                owner: 'M',
                description: "Make up the bed in the morning",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '27',
                title: "Wash sheets and pillows",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Remove and wash all bedding",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '28',
                title: "Organize nightstand",
                status: false,
                frequency: "Bi-weekly",
                owner: 'M',
                description: "Clean and organize drawers and top of nightstand",
                date: '2019-05-17 12:00:00',
                roomId: 4
            },
            {
                houseId: '2',
                taskId: '29',
                title: "Organize closets",
                status: false,
                frequency: "Monthly",
                owner: 'M',
                description: "Remove any unwanted items and put away clothing",
                date: '2019-05-17 12:00:00',
                roomId: 4
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("defaultTasks", null, {});
    }
};
