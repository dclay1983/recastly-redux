import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = connect((state) => ({ video: state.currentVideo }))(VideoPlayer);
// TODO: define a VideoPlayerContainer component which will hook up your action
// dispatchers with your VideoPlayer component props.

// export default VideoPlayerContainer;
export default VideoPlayerContainer;
