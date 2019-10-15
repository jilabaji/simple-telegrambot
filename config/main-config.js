(function(appConfig) {
    "use strict";
    
    // *** instantiate configuration variables *** //
    require("./globel-data");

    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');



    // var app = express();
    appConfig.init = function(app, express) {
        // *** view engine *** //
        // app.set('views', path.join(__dirname, 'views'));
        app.set('views', './views');
        app.set("view engine", "jade");


        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static('./public'));

    };




})(module.exports);
