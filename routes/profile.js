const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers').profileController;

router.get('/', passport.authenticate('jwt', { session: false }), profileController.getProfile);
router.get('/handle/:handle', profileController.getProfileByHandle);
router.get('/user/:user_id', profileController.getProfileByUserId);
router.get('/all/', profileController.getAllProfiles);

router.post('/', passport.authenticate('jwt', { session: false }), profileController.createProfile);
router.post('/education', passport.authenticate('jwt', { session: false }), profileController.addEducation);
router.post('/experience', passport.authenticate('jwt', { session: false }), profileController.addExperience);

router.delete('/education/:education_id', passport.authenticate('jwt', { session: false }), profileController.deleteEducation);
router.delete('/experience/:experience_id', passport.authenticate('jwt', { session: false }), profileController.deleteExperience);
router.delete('/', passport.authenticate('jwt', { session: false }), profileController.deleteProfile);

module.exports = router;



