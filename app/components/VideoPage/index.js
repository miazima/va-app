import React from 'react';

import VideoPlayer from './VideoPlayer'

const VideoPage = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'https://s3-ap-southeast-1.amazonaws.com/vap-video-testing/angmoh-drunken-rage.mp4',
      type: 'video/mp4'
    }]
  }
  
  return <VideoPlayer { ...videoJsOptions } />
};

export default VideoPage;
