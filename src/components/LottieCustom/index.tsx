import Lottie from 'react-lottie';
import { VFC } from 'react';

export type LottieCustomProps = {
  src: any;
};

export const LottieCustom: VFC<LottieCustomProps> = ({ src }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: src,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
