const db = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;



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