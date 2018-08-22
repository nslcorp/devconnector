const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../../../models/Profile');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));


router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  const id = req.user.id;
  Profile.findById(id).then(profile => {
    const errors = {};
    if (!profile) {
      errors.noprofile = 'There is no profile for this profile';
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

module.exports = router;
