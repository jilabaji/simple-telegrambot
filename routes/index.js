var express = require('express');
var router = express.Router();
const index_ctrl = require('../controllers/index')
var debug = require('debug')('girlfriday:server');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkapp', async function(req, res, next) {
  try {
    let result = await index_ctrl.sum(75, 25);
    let send_data = {
      success: true,
      status: 200,
      result: result
    };
    return res.json(send_data);
  } catch (error) {
    // Error Web Response
    let send_data = {
      success: false,
      status: 401,
      error: error.response
    };
    return res.json(send_data);
  }
});

router.get("/start_bot", async function(req, res) {
  try {
    debug('/start_bot init');
    let result = await index_ctrl.send_welcome_note(req.body);
    let send_data = {
      success: true,
      status: 200,
      result: result
    };
    return res.json(send_data);
  } catch (error) {
     debug('/start_bot exception');
     // Error Web Response
     let send_data = {
      success: false,
      status: 401,
      error: error.response
    };
    return res.json(send_data);
  }
  
});

module.exports = router;
