var messages = require('../controllers/messageControllers.js');
var comments = require('../controllers/commentControllers.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		messages.show(req, res);
	});

	app.post('/message', function(req, res) {
		messages.create(req, res);
	});

	app.post('/comment/:message_id', function(req, res) {
		comments.create(req, res);
	})
}