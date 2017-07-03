import React from 'react';
import Save from './resultsChildren/Save.js';

const Results = (props) => {
	return(
		<div className='panel panel-primary'>
			<div className='panel-heading'>
				<div className='panel-title'>
					<p>
						Results
					</p>
				</div>
			</div>
			<div className='panel-body'>
			{
				props.results.map((item) => {
					return(
						<div key={item.key} className='well article-well'>
							<div className='row'>
								<div className='col-xs-10'>
									<a target='_blank' href={item.url}>{item.title}</a>
								</div>
								<div className='col-xs-2'>
									<Save 
									article={item}
									/>
								</div>
							</div>
						</div>
					);
				})
			}
			</div>
		</div>
	);
};

export default Results;
