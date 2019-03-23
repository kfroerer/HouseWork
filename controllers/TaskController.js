const db = require("../models");

// Defining methods for the TaskController
module.exports = {
  findAll: function(req, res) {
    db.Task.findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task.findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Task.create({ name: req.body.name })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task.update(
      {
        name: req.params.name
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
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
