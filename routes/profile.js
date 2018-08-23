const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers/index').profileController;

router.get('/', passport.authenticate('jwt', { session: false }), profileController.getProfile);
router.post('/', passport.authenticate('jwt', { session: false }), profileController.createProfile);

module.exports = router;



