import { Hero } from './Hero';
import { Case } from './Case';
import { Introduction } from './Introduction';
import { Relation } from './Relation';
import { Carousel } from '../@commons/Carousel';

export const HomePage = () => {
  return (
    <div className="space-y-8 sm:space-y-24">
      <Hero />
      <Carousel />
      <Introduction />
      <Case />
      <Relation />
    </div>
  );
};
