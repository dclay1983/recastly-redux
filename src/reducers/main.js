import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = () => {};

// Look into this more ***************************

export default combineReducers({
  currentVideo,
  videoList
});
