import { BurnerSnap } from '../@commons/BurnerSnap';
import { Current } from './Current';
import { TwoContent } from './TwoContent';

export const AboutPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="mt-8 text-2xl font-bold text-center">ABOUT</h1>
      <BurnerSnap />
      <TwoContent />
      <Current />
    </div>
  );
};
