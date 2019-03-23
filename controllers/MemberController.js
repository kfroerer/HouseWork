const db = require("../models");

// Defining methods for the HouseController
module.exports = {
  findAll: function(req, res) {
    db.Member.findAll()
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Member.findById(req.params.id)
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Member.create({ name: req.body.name })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Member.update(
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
    db.Member.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  }
};
