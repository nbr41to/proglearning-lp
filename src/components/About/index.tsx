import { BurnerSnap } from '../@commons/BurnerSnap';
import { Current } from './Current';
import { TwoContent } from './TwoContent';

export const AboutPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl text-center">ABOUT</h1>
      <BurnerSnap />
      <TwoContent />
      <Current />
    </div>
  );
};
