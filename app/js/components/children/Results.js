var React = require('react');

var Results = React.createClass({
	runMap: function(props){
		props.map(function(item){
			return 
			<li key={item._id} href={item.url} className='result-item'>
				{item.title}
			</li>
		})
	},

	render: function(){
		return(
			<div className='panel panel-primary'>
				<div className='panel-heading'>
					<div className='panel-title'>
						<h3>
							Results
						</h3>
					</div>
				</div>
				<div className='panel-body'>
					<ul className='result-ul'>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Results;
