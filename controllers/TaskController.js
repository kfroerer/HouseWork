const db = require("../models");

// Defining methods for the TaskController
module.exports = {
  findAll: function (req, res) {
    db.Task
      .findAll()
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Task
      .findOne(
        {
          where: {
            id: req.params.id
          }
        })
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findAllByRoomId: function (req, res) {
    db.Task
      .findAll(
        {
          where: {
            roomId: req.params.id
          }
        }
      )
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    return db.Task
      .create({
        title: req.body.title,
        frequency: req.body.frequency,
        owner: req.body.owner,
        date: req.body.date,
        description: req.body.description,
        roomId: req.body.roomId,

      })
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Task
      .update(
        {
          title: req.body.title,
          frequency: req.body.frequency,
          owner: req.body.owner,
          date: req.body.date,
          description: req.body.description
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Task
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
