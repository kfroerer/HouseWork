const db = require("../models");

// Defining methods for the TaskController
module.exports = {
  findAll: function(req, res) {
    db.task
      .findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.task
      .findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.task
      .create({
        title: req.body.title,
        frequency: req.params.frequency,
        owner: req.params.owner,
        date: req.params.date,
        description: req.params.description
      })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.task
      .update(
        {
          title: req.params.title,
          frequency: req.params.frequency,
          owner: req.params.owner,
          date: req.params.date,
          description: req.params.description
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
    db.task
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
