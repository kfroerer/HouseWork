const db = require("../models");

// Defining methods for the houseController
module.exports = {
  findAll: function(req, res) {
    db.house
      .findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.house
      .findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.house
      .create({ username: req.body.username })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.house
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
    db.house
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
