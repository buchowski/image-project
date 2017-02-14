let thumbnailsState = { indexOfFirstVisibleThumbnail: 0 }

export default function thumbnails(state = thumbnailsState, action) {
	switch(action.type) {
		case 'UPDATE_INDEX':
			return Object.assign({}, thumbnailsState, { indexOfFirstVisibleThumbnail: action.index });
		default:
			return state;
	}
}