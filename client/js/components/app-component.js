import React from 'react';
import ThumbnailNavComponent from './thumbnail-nav-component';
import SearchComponent from './search-component';

export default function AppComponent(props) {
	let { search, onClick, onInput } = props;

	return (
		<div>
			<SearchComponent search={ search } onClick={ onClick } onInput={ onInput } />
			<ThumbnailNavComponent props={props} />
		</div>
	)
}