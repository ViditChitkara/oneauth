/**
 * Created by championswimmer on 08/03/17.
 */
const router = require('express').Router();
const passport = require('../../passport/passporthandler');

const config = require('../../config');

router.get('/', passport.authenticate('facebook', {scope: ['email']}));

router.get('/callback', passport.authenticate('facebook', {
    scope: config.FACEBOOK_LOGIN_SCOPES,
    failureRedirect: '/login',
    successReturnToOrRedirect: '/users/me'
}));

module.exports = router;