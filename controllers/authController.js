const db = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const jwt = require('jsonwebtoken');



module.exports = {

authenticate: function (request, response) {
  console.log('backend', request.body)
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
          username: house.username,
          password: house.passowrd
        };
        console.log(sanitizedHouse);
        // generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(sanitizedHouse, "your_jwt_secret");
        response.json({
          house: sanitizedHouse,
          token: token
        });
      });
    })(request, response);
  }
}