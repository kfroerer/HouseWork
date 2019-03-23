const db = require("../models");

// Defining methods for the houseController
module.exports = {
  findAll: function(req, res) {
    db.House.findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  ffindById: function(req, res) {
    db.House.findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.House.create({ name: req.body.name })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.House.update(
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
    db.House.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
