import { connect } from 'react-redux';
import AppComponent from '../components/app-component';
import { updateSearchTerm, searchForTweets, nav } from '../actions/all-actions';

const THUMBNAILS_TO_DISPLAY = 3;

const mapStateToProps = (state) => {
	let { search: { term }, tweets, thumbnails: { indexOfFirstVisibleThumbnail }} = state;
	let startIndex = indexOfFirstVisibleThumbnail;
	let endIndex = indexOfFirstVisibleThumbnail + THUMBNAILS_TO_DISPLAY;

	return {
		visibleThumbnails: tweets.slice(startIndex, endIndex),
		isDisableBigLeftNav: indexOfFirstVisibleThumbnail - 3 < 0,
		isDisableBigRightNav: indexOfFirstVisibleThumbnail + 3 >= tweets.length - 1,
		isDiableSmallLeftNav: indexOfFirstVisibleThumbnail - 1 < 0,
		isDiableSmallRightNav: indexOfFirstVisibleThumbnail >= tweets.length - 1,
		term,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(searchForTweets());
		},
		onInput: ($event) => {
			let term = $event.target.value;

			dispatch(updateSearchTerm(term));
		},
		onNav: (count) => {
			dispatch(nav(count));
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;