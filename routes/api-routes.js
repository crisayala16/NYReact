var express = require('express');
var router = express.Router();
var Article = require('./../models/Article.js');
var request = require('request');

router.post('/api/scrape', function(req, res){
	var topic = req.body.query.topic;
	const start = req.body.query.start;
	var end = req.body.query.end;
	request.get({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		qs: {
			'api-key': "eb9e5a4072784edc9cc08f9c207a8c74",
			'q': topic,
			'begin_date': `${start}0101`,
			'end_date': `${end}1231`
		}
	},
	function(err, response, body){
		if(err){
			console.log(err);
		}
		res.send(body);
	});
});

router.get('/api/articles', function(req, res){
	Article.find()
	.exec(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	})
});

router.post('/api/save', function(req, res){
	var reqArticle = req.body.article;
	var newArticle = new Article(reqArticle);
	newArticle.save(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	});
});

router.put('/api/saved', function(req, res){
	var id = req.body.id;
	Article.remove({'_id': id})
	.exec(function(err){
		if(err){
			console.log(err);
		}
	})
});

module.exports = router;