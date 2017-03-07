var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./config/middleware.js') (app,express); 
require('./config/routes.js') (app,express);
//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI ='mongodb://localhost/test';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('... mongoDB  test is open');
	});
//=============================================================================
/*									Server   								 */
//=============================================================================
	var port = 3000;
	app.listen(port , function () {
		console.log('...Server now listening on port ' + port);
	});
module.exports = app;