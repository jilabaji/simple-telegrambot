const express = require("express");

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config");


// *** express instance *** //
const app = express();

// *** config *** //
appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;