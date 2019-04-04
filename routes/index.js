const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const creds = require("../config/emailConfig");

var express = require('express');
var nodemailer = require('nodemailer')

// Set up Email Transporter
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: '"HouseWork App 🏡" <housework.ut.2019@gmail.com>',
    to: req.body.email,  //Change to email address that you want to receive messages on
    subject: `${name} Invited You To Join HouseWork!`,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

const authRoutes = require("./auth");
const passport = require("passport");
const rooms = require("./api/rooms");
const tasks = require("./api/tasks");
// API Routes
router.use("/api",  passport.authenticate("jwt", { session: false }), apiRoutes);
router.use("/auth", authRoutes);
//or  separate auth from api auth
// router.use("/rooms", passport.authenticate('jwt', { session: false }), rooms);
// router.use("/tasks", passport.authenticate('jwt', { session: false }), tasks);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
