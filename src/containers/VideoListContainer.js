import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = connect(
  (state) => ({ videos: state.videoList }),
  (dispatch, ownProps) => ({handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }})
)(VideoList);

export default VideoListContainer;
