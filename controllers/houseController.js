const db = require("../models");

// Defining methods for the houseController
module.exports = {
  findAll: function(req, res) {
    db.House
      .findAll()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.House
      .findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    console.log(req.body)
    await
    db.House
      .create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
          }, {
            include: [{
              model: db.defaultTask,
              as: 'defaultTask',
              through: {
                model: db.Task
              }
            }]
          }
          )

          await Promise.all(res.defaultTask.map((task, index) => 
          res.addTask(task, {
            through: {
              status: false,
              frequency: defaultTask[index].frequency,
              owner: defaultTask[index].owner,
              date: defaultTask[index].date,
            }
          })))
          // .then((house) => {
          //   db.defaultTask.findAll()
          //   .then((defaultTask) => {
          //     defaultTask.map((defaultTask) => {
          //       house.adddefaultTask(defaultTask,
          //         {
          //           through: {
          //             status: false,
          //             frequency: defaultTask.frequency,
          //             owner: defaultTask.owner,
          //             date: defaultTask.date,
          //           }
          //         }).then(house => {
          //           return res.json({house:house})
          //         })
          //     })
          //   })
          // })
          //not sure what to return here....//want to reroute to rooms view

      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.House
      .update(
        {
          username: req.params.username,
          password: req.params.password
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.House
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
