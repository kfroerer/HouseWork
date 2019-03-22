const db = require("../models");

// Defining methods for the HouseController
module.exports = {
  findAll: function(req, res) {
    db.Area.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Area.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTasksByRoomId: function(req, res) {
    db.Area.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Task]
    }).then(function(area) {
      res.json(area.tasks);
    });
  },
  create: function(req, res) {
    db.Area.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Area.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Area.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
