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
  create: function(req, res) {
    console.log(req.body)
    db.House
      .create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
          })
          .then((house) => {
            db.defaultTasks.findAll().then((defaultTasks) => {
              defaultTasks.map((defaultTask) => {
                house.addDefaultTasks(defaultTask,
                  {
                    through: {
                      status: false,
                      // frequency: defaultTask.frequency,
                      // owner: defaultTask.owner,
                      // date: defaultTask.date,
                      // roomId: defaultTask.roomId
                    }
                  }).then(house => {
                    return res.json({house:house})
                  })
              })
            })
          })
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
