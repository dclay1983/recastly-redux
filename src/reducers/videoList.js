import Redux from 'redux';
// action = {type: 'CHANGE_VIDEO_LIST', videos }
var videoListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos || null;
  default:
    return state;
  }
};

export default videoListReducer;
