require("dotenv").config();

var bot = require('./bots');
require('./web')(bot);
