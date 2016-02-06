var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {
	show: function(req, res) {
		Message.find({}).sort({created_at: -1}).populate('comments').exec(function(err, messages) {
			if (err) {
				console.log("Couldn't find messages");
			} else {
				res.render('index', {messages: messages});
			}
		})
	},

	create: function(req, res) {
		var message = new Message(req.body);
		message.save(function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Successfully saved message");
				res.redirect('/')
			}
		})
	}
}