if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const cors = require("cors");
const userModel = require("./config/database");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const { hashSync } = require('bcrypt')
const passport = require('./config/passport-config');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const FacebookStrategy = require('passport-facebook').Strategy;
const { Mongoose } = require('mongoose');
const { redirect } = require('express/lib/response');
const req = require('express/lib/request');
// const initializePassport = require('./config/passport-config');
const methodOverride = require('method-override');
const res = require('express/lib/response');
const MicrosoftStrategy = require('passport-microsoft').Strategy;


require('./config/passport-config');
//     passport,
//     email => users.find(user => user.email === email),      //temporary users variable is no more
//     id => users.find(user => user.id === id)
// )

// initializePassport(
//     passport, email => {
//         return users.find(user => user.email === email)
//     }
// )
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        return callback(null, true);

        callback(new Error('Not allowed by CORS'));
    }
};
app.use(cors(corsOptions));
app.set('view-engine', 'js')
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/passport', collectionName: "sessions" }),
    cookie: {                   //this cookie has a timer for 1 day after which session will expire
        maxAge: 24 * 60 * 60 * 1000  //24 hours //the maxAge element stores value in miliseconds 
    }
}))
app.use(express.urlencoded({ extended: true }))  //allows us to post something to our server
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))




passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_ID_FB,
    clientSecret: process.env.CLIENT_SECRET_FB,
    callbackURL: "http://localhost:3000/auth/facebook/document"
},
    function (accessToken, refreshToken, profile, cb) {
        userModel.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new MicrosoftStrategy({
    clientID: process.env.CLIENT_ID_MICROSOFT,
    clientSecret: process.env.CLIENT_SECRET_MICROSOFT,
    callbackURL: "http://localhost:3000/auth/microsoft/",
    scope: ['user.read']
},
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

app.get('/', checkIsAuthenticated, (req, res) => {     //'holds an URL', here the starting page is directed to
    res.render('index.ejs') //renders the views created
})

app.post('/', checkIsNotAuthenticated, (req, res) => {
    req.logout();
    res.redirect('/login');
})

app.get('/document', checkIsAuthenticated, (req, res) => {     //'holds an URL', here the starting page is directed to
    if (req.isAuthenticated())
        res.render('document.ejs') //renders the views created
    else
        res.status(401).send({ msg: 'You Sir are an Unauthorized Nigger' })
})

// app.get('/login', checkIsNotAuthenticated, (req, res) => {     //here the 'Login' URL is created
//     res.render('login.ejs')
// })

app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (user) { return res.send(user) }
      else return res.send(JSON.stringify({info, err:"ERROR MY NIGGAH"}))
    })(req, res, next);
  });

// app.post('/login', passport.authenticate('local'), async(req, res) =>
// {
//     res.send({success: true});
// });


app.get('/registration', checkIsNotAuthenticated, (req, res) => {
    res.render('registration.ejs')
})

app.post('/registration', checkIsNotAuthenticated, async (req, res) => {
    let user = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        // password: req.body.password,
        mobile: req.body.mobile,
        facebookId: 'null'
    })

    user.save().then(user => console.log(user));

    res.send({success : true});
    // res.redirect('/');
})

app.get('/hello', checkIsAuthenticated, (req, res) => {
    if (req.isAuthenticated())
        res.send("hello");
    else
        res.status(401).send({ msg: 'You Sir are an Unauthorized Nigger' })
})

app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/facebook/document',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log(req.isAuthenticated())
        res.redirect('/');
    });

function checkIsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.status(401).send({ msg: 'You Sir are an Unauthorized Nigger' })
}

function checkIsNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}


app.delete('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})

app.get('/auth/microsoft',
    passport.authenticate('microsoft'));

app.get('/auth/microsoft/',
    passport.authenticate('microsoft', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.listen(5000);