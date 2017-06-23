var React = require('react');
var Search = require('./children/Search.js');
var Results = require('./children/Results.js');
var Saved = require('./children/Saved.js');

var Main = React.createClass({
	render: function(){
		return(
			<div className='container'>
				<div className='jumbotron'>
					NYT Scrubber
				</div>

				<Search/>

				<Results/>

				<Saved/>	
			</div>

		);
	}
});

module.exports = Main;