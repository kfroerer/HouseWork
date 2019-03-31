// require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
console.log("env", process.env.NODE_ENV);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


var secureRoute = require("./routes/api");
// require("./routes/api")(app);
// require("./routes/auth")(app);
// require("./routes/loginRoutes")(app);
app.use(routes);


app.use("/api", passport.authenticate("jwt", { session: false }), secureRoute);

var syncOptions = { force: false };



db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


module.exports = app;
