import React from 'react';

const Cards = (props) => {
	return(
		<div className='tc bg-light-green br3 pa3 dib ma3 grow bw2 shadow3'  >
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			
			</div>
		</div>
		);
}
export default Cards;
