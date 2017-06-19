var React = require('react');
var Child = require('./Child.js');

var Menu = React.createClass({
	render: function(){
		return(
			<div className='Menu'>
				Hello World
				<Child/>
			</div>
		);
	}
});

module.exports = Menu;