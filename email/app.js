const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

//View Engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Static folder
app.use("/public/", express.static(path.join(__dirname, "public")));

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/send", (req, res) => {
  const output = `
    <p>You have been invited to join HouseWork</p>
    <h3>House Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>House: ${req.body.house}</li>
        <li>Room: ${req.body.room}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "housework.ut.2019@gmail.com", // gmail account
      pass: "tS8kKxB2P47nRmC" // gmail password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"HouseWork App 🏡" <housework.ut.2019@gmail.com>', // sender address
    to: "victoria.517.ramirez.com", // list of receivers
    subject: "Member Request", // Subject line
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Invitation has been sent" });
  });
});
app.listen(4000, () => console.log("Server started"));
