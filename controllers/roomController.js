const db = require("../models");

// Defining methods for the roomController
module.exports = {
  findAll: function(req, res) {
    console.log("db.room is " + db.room);
    db.room.findAll({})
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.room.findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findTasksByRoomId: function(req, res) {
    console.warn('controller log', req.body, req.params)
    db.Room.findOne({
      where: {
        id: req.params.id
      },
      include: [db.task]
    }).then(function(room) {
      res.json(room.tasks);
    });
  },
  create: function(req, res) {
    db.room.create({name: req.body.name})
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.room.update(
      {
      name: req.params.name
      },
      {
      where: {
        id: req.params.id
      }})
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.room.destroy({
      where: {
        id: req.params.id
      }})
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
