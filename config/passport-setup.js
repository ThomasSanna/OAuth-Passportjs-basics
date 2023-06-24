const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20'); // go to https://www.passportjs.org/packages/ to see all oauth passport strategy!

passport.use(
    new GoogleStrategy({
        // options for google strategy
    }), ( ) => {
        //passport callback function
    }
)