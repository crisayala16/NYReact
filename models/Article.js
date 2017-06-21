var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		unique: true
	},
	date: {
		type: Date
	},
	url: {
		type: String
	},
	note: [{
		type: Schema.ObjectId,
		ref: 'Note'
	}]
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;