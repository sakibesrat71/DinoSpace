const MicrosoftStrategy = require('passport-microsoft').Strategy;
passport.use(new MicrosoftStrategy({
    clientID: 'applicationidfrommicrosoft',
    clientSecret: 'applicationsecretfrommicrosoft',
    callbackURL: "http://localhost:3000/auth/microsoft/",
    scope: ['user.read']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ userId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));