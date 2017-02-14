import React from 'react';

export default function NavButtonComponent({ direction, count, onNav }) {

	return (
		<div className="nav-container">
			<div onClick={ onNav.bind(this, count) } className={ `nav-arrow ${direction}` } />
		</div>
	)
}