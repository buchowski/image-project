import React from 'react';
import ThumbnailNavComponent from './thumbnail-nav-component';
import SearchComponent from './search-component';

export default function AppComponent({ visibleThumbnails, search, onClick, onInput, onNav }) {
	return (
		<div>
			<SearchComponent search={ search } onClick={ onClick } onInput={ onInput } />
			<ThumbnailNavComponent visibleThumbnails={ visibleThumbnails } onNav={ onNav } />
		</div>
	)
}