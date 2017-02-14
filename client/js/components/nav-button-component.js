import React from 'react';

export default function NavButtonComponent({ direction, count, onNav, isDisable }) {

	return (
		<div className="nav-container">
			<div
				onClick={ isDisable ? null : onNav.bind(this, count) }
				className={ `nav-arrow ${direction} disabled-${isDisable}` }
			/>
		</div>
	)
}