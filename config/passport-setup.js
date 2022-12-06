const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');
const Staff = require("../models/staff")
const { Error } = require('mongoose');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        if (user) {
            done(null, user);
        }
        else {
            staff.findById()
        }

    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        // check if user already exists in our own db
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                if (profile._json.hd === "bitsathy.ac.in") {
                    new User({
                        email: profile._json.email,
                        username: profile.displayName,
                        googleId: profile.id,
                        profile: profile._json.picture
                    }).save().then((newUser) => {
                        done(null, newUser)
                    })
                }
                else {
                    done(new Error("Wrong domain!"));
                }
            }
        });
    })
);
