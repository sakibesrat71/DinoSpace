const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');
const userModel = require("./database");
const {compareSync} = require('bcrypt');

// function initialize(passport){
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email)

//     if(user ==null)
//     {
//       return done(null, false, {message: 'No user with that email'})
//     }

//     try{
//       if(await bcrypt.compare(password, user.password)){
//         return done(null, user)
//       } else{
//         return done(null, false, {message: "password incorrect"})
//       }
//     }
//     catch(e)
//     {
//       return done(e)
//     }
//   }
// }

passport.use(new LocalStrategy(
  function(username, password, done) {
    userModel.findOne({ username: username }, function (err, user) {
      throw username;
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if (!compareSync(password, user.password)) {
      if(password == user.password){
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//user id is serialized to maintain a session through cookie
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
//fetch session details using session id
  passport.deserializeUser(function(id, done) {
    userModel.findById(id, function(err, user) {
      done(err, user);
    });
  });

module.exports = passport