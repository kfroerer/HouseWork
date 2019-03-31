const db = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

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


module.exports = {

authenticate: function (request, response) {
    passport.authenticate("local", { session: false }, function(
      error,
      house,
      info
    ) {
      if (error || !house) {
        return response.status(403).json({
          message: "Unable to Authorize",
          house: house,
          error: error,
          info: info
        });
      }
      request.login(house, { session: false }, function(error) {
        if (error) {
          response.send(error);
        }
        var sanitizedHouse = {
          house: house.id,
          username: house.username,
        };
        console.log(sanitizedHouse);
        // generate a signed son web token with the contents of user object and return it in the response
        var token = jwt.sign(sanitizedHouse, "your_jwt_secret");
        response.json({
          token: token
        });
      });
    })(request, response);
  }
}