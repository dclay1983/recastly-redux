import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { debounce } from 'lodash';

var handleVideoSearch = (q) => {
  return debounce((dispatch) => (
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    })
  ), 500);
};

export default handleVideoSearch;
