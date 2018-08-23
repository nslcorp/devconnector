const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers').profileController;

router.get('/', passport.authenticate('jwt', { session: false }), profileController.getProfile);
router.post('/', passport.authenticate('jwt', { session: false }), profileController.createProfile);
router.get('/handle/:handle', profileController.getProfileByHandle);
router.get('/user/:user_id', profileController.getProfileByUserId);
router.get('/all/', profileController.getAllProfiles);

module.exports = router;



