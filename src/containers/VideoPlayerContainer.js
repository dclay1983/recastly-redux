import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (state) => {
  const mapStateToProps = (state, ownProps) => state[ownProps];
  connect(mapStateToProps);
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
