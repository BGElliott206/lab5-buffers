'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUriParser: true });

// Do some work

// Disconnect
mongoose.disconnect();