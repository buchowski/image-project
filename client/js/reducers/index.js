import { combineReducers } from 'redux';
import tweets from './tweets-reducer';
import search from './search-reducer';
import thumbnails from './thumbnails-reducer';

export default combineReducers({
	tweets,
	search,
	thumbnails
});