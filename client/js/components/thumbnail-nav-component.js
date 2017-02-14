import React from 'react';
import ThumbnailComponent from './thumbnail-component';
import NavButtonComponent from './nav-button-component';

export default function ThumbnailNavComponent({ visibleThumbnails, onNav }) {
	return (
		<div>
			<div className="big-screen-nav">
				<NavButtonComponent onNav={ onNav } direction="left" count={3} />
				<div className="thumbnail-container">
					{ visibleThumbnails.map((thumbnail, i) => <ThumbnailComponent key={i} tweet={ thumbnail } /> )}
				</div>
				<NavButtonComponent onNav={ onNav } direction="right" count={3} />
			</div>
			<div className="small-screen-nav">
				<NavButtonComponent onNav={ onNav } direction="left" count={1} />
				<NavButtonComponent onNav={ onNav } direction="right" count={1} />
			</div>
		</div>
	)
}