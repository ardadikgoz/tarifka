import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return <LottieView source={require('../../Assets/Loading.json')} autoPlay />;
};

export default Loading;
