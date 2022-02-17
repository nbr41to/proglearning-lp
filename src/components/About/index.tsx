import { Carousel } from '../@commons/Carousel';
import { PageTitle } from '../@commons/PageTitle';
import { TwoContent } from './TwoContent';

export const AboutPage = () => {
  return (
    <div className="space-y-8">
      <PageTitle title="ABOUT" description="progLearning と progLab をそれぞれ詳しく知る" />
      <Carousel />
      <TwoContent />
    </div>
  );
};
