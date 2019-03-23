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
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// var secureRoute = require("./routes/apiRoutes");
// require("./routes/api")(app);
// require("./routes/authRoutes")(app);
// require("./routes/loginRoutes")(app);
app.use(routes);
passport.use(
  new LocalStrategy(
    {
      nameField: "username",
      passwordField: "password"
    },
    function(username, password, cb) {
      db.House.findOne({
        where: {
          username: username
        }
      })
        .then(function(user) {
          if (!house || !house.validatePassword(password)) {
            return cb(null, false, { message: "Incorrect name or password." });
          }
          return cb(null, house, { message: "Logged In Successfully" });
        })
        .catch(function(error) {
          cb(error);
          throw error;
        });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, done) {
      //find the user in db if needed
      try {
        return done(null, jwtPayload);
      } catch (error) {
        console.log(error);

        done(error);
      }
    }
  )
);

// app.use("/api", passport.authenticate("jwt", { session: false }), secureRoute);

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
