require('dotenv').config(); //instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.port = process.env.PORT || '3000';
CONFIG.BOTTOKEN = process.env.TELBOT_TOKEN