import React from 'react';
import helpers from './../utils/helpers.js';
import Remove from './savedChildren/Remove.js';

class Saved extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			saved: []
		};
		this.updateSaved = this.updateSaved.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	updateSaved(){
		let self = this;
		helpers.getArticles(function(response){
			self.setState({
				saved: response.data
			});
		});
	}
	componentDidMount(){
		this.updateSaved();
	}
	showArticles(){
		return this.state.saved.map((item) => {
				return(
					<div key={item._id} className='well'>
						<div className='row'>
							<div className='col-xs-7'>
								<a target='_blank' href={item.url}>
									{item.title}
								</a>
							</div>
							<div className='col-xs-3'>
								<p>
									Date Saved: {item.dateSaved}
								</p>
							</div>
							<div className='col-xs-2'>	
								<Remove 
								id={item._id}
								updateSaved={this.updateSaved}
								/>
							</div>
						</div>
					</div>
				);
			});
	}
	render(){
		return(
			<div className='panel panel-primary'>
				<div className='panel-heading'>
					<div className='panel-title'>
						<p>
							Saved
						</p>
					</div>
				</div>
				<div className='panel-body'>
					{this.showArticles()}
				</div>
			</div>
		);
	}
};
export default Saved;
