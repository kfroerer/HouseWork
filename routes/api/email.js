const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const creds = require("../api/config.js");

sendEmail (name, email, message) {
    fetch('/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('here is the response: ', res);
    })
    .catch((err) => {
      console.error('here is the error: ', err);
    })
   }

  router.post("/send", (req, res, next) => {
  var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

let mailOptions = {
    from: "HouseWork App 🏡",
    to: "victoria.517.ramirez.com", // list of receivers
    subject: "Member Request", // Subject line
    html: content // html body
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message}`;

res.render("email", { msg: "Invitation has been sent" });

app.listen(4000, () => console.log("Server started"));

module.exports = router;
})