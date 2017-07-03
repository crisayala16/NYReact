var axios = require('axios');
var cheerio = require('cheerio');
var request = require('request');


var helpers = {
	runQuery: function(topic, start, end, callback){
		var query = {
			topic: topic,
			start: start,
			end: end
		}
		return axios.post('/api/scrape', {
			query: query
		}).then(function(response){
			callback(response);
		});
	},
	postArticle: function(title, date, url, callback){
		var article = {
			title: title,
			date: date,
			url: url
		}
		return axios.post('/api/save', {article: article}).then(function(response){
			callback(response);
		})
	},
	getArticles: function(callback){
		return axios.get('api/articles').then(function(response){
			callback(response);
		});
	},
	removeArticle: function(id, callback){
		return axios.put('/api/saved', {id: id}).then(function(response){
			callback(response);
		});
	},
	addNote: function(note){
		return axios.post('/api/note', {note: note});
	},
	removeNote: function(id){
		return axios.put('/api/note', {id: id});
	}
}
export default helpers;