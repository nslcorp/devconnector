const ProfileModel = require('../models').ProfileModel;
const UserModel = require('../models').UserModel;
const validateProfileInput = require('../validation/profile');
const validateExperienceInput = require('../validation/experience');
const validateEducationInput = require('../validation/education');


module.exports.getAllProfiles = (req, res) => {
  const errors = {};
  errors.noprofiles = 'There is no profiles at all';

  ProfileModel.find()
  .populate('user', ['name', 'avatar'])
  .then(profiles => {
    if (!profiles) {
      return res.status(404).json(errors);
    }
    res.json(profiles);
  })
  .catch(() => res.status(404).json(errors));
};

module.exports.getProfile = (req, res) => {
  const errors = {};

  ProfileModel.findOne({ user: req.user.id })
  .populate('user', ['name', 'avatar'])
  .then(profile => {
    if (!profile) {
      errors.noprofile = 'There is no profile for this user';
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
};


module.exports.getProfileByHandle = (req, res) => {
  const errors = {};

  ProfileModel.findOne({ handle: req.params.handle })
  .populate('user', ['name', 'avatar'])
  .then(profile => {
    if (!profile) {
      errors.noprofile = 'There is no profile for this user';
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
};

module.exports.getProfileByUserId = (req, res) => {
  const errors = {};

  ProfileModel.findOne({ user: req.params.user_id })
  .populate('user', ['name', 'avatar'])
  .then(profile => {
    if (!profile) {
      errors.noprofile = 'There is no profile for this user';
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(() => res.status(404).json({ noprofile: 'There is no profile for this user' }));
};

module.exports.addExperience = (req, res) => {

  const { errors, isValid } = validateExperienceInput(req.body);

  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  ProfileModel.findOne({ user: req.user.id }).then(profile => {
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };

    // Add to exp array
    profile.experience.unshift(newExp);

    profile.save()
    .then(profile => res.json(profile))
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

module.exports.addEducation = (req, res) => {

  const { errors, isValid } = validateEducationInput(req.body);

  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  ProfileModel.findOne({ user: req.user.id }).then(profile => {
    const newEducation = {
      school: req.body.school,
      degree: req.body.degree,
      fieldofstudy: req.body.fieldofstudy,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };

    // Add to exp array
    profile.education.unshift(newEducation);

    profile.save()
    .then(profile => res.json(profile))
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

module.exports.deleteEducation = (req, res) => {

  ProfileModel.findOne({ user: req.user.id }).then(profile => {

    const removeIndex = profile.education
    .map(edu => edu.id)
    .findIndex(id => id === req.params.education_id);

    if (removeIndex !== -1) {
      profile.education.splice(removeIndex);

      profile.save()
      .then(profile => res.json(profile))
      .catch(err => console.log(err));
    }
    else {
      res.status(404).json({ education: 'No education with such id' });
    }

    // Add to exp array

  })
  .catch(err => console.log(err));
};

module.exports.deleteExperience = (req, res) => {

  ProfileModel.findOne({ user: req.user.id }).then(profile => {

    const removeIndex = profile.experience
    .map(experience => experience.id)
    .findIndex(id => id === req.params.experience_id);

    if (removeIndex !== -1) {
      profile.experience.splice(removeIndex);

      profile.save()
      .then(profile => res.json(profile))
      .catch(err => console.log(err));
    }
    else {
      res.status(404).json({ education: 'No experience with such id' });
    }

    // Add to exp array

  })
  .catch(err => console.log(err));
};


module.exports.deleteProfile = (req, res) => {
  ProfileModel.findOneAndRemove({ user: req.user.id }).then(() => {
    UserModel.findOneAndRemove({ _id: req.user.id }).then(() =>
      res.json({ success: true })
    );
  });
}


module.exports.createProfile = (req, res, next) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.company) profileFields.company = req.body.company;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.status) profileFields.status = req.body.status;
  if (req.body.githubusername)
    profileFields.githubusername = req.body.githubusername;
  // Skills - Spilt into array
  if (typeof req.body.skills !== 'undefined') {
    profileFields.skills = req.body.skills.split(',').map(skills => skills.trim());
  }

  // Social
  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  ProfileModel.findOne({ user: req.user.id }).then(profile => {
    if (profile) {
      // Update
      ProfileModel.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      ).then(profile => res.json(profile));
    } else {
      // Create

      // Check if handle exists
      ProfileModel.findOne({ handle: profileFields.handle }).then(profile => {
        if (profile) {
          errors.handle = 'That handle already exists';
          res.status(400).json(errors);
        }

        // Save ProfileModel
        new ProfileModel(profileFields).save().then(profile => res.json(profile));
      });
    }
  })
  .catch(err => next(err));
};
