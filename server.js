const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport);

const mongoURI = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(mongoURI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


// Use Routes
app.use('/api/users', routes.users);
app.use('/api/profile', routes.profile);
app.use('/api/posts', routes.posts);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
