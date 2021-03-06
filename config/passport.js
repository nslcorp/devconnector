const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models').UserModel;
const secretOrKey = require('../config/keys').secretOrKey;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey
};

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (payload, done) => {
    UserModel.findById(payload.id)
    .then(user => {
      user ? done(null, user) : done(null, false);
    })
    .catch(err => console.log(err));
  }));
};

