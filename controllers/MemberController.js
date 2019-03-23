const db = require("../models");

// Defining methods for the HouseController
module.exports = {
  findAll: function(req, res) {
    db.member
      .findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.member
      .findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.member
      .create({ name: req.body.name })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.member
      .update(
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
    db.member
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
