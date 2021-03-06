var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dateTime = require('get-date');
var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	dateSaved: {
		type: String,
		default: dateTime()
	},
	note: [{
		type: Schema.ObjectId,
		ref: 'Note'
	}]
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;