import { Hero } from './Hero';
import { Case } from './Case';
import { Introduction } from './Introduction';
import { Relation } from './Relation';
import { LinkButton } from '../@commons/Button/LinkButton';
import { BurnerSnap } from '../@commons/BurnerSnap';

export const HomePage = () => {
  return (
    <div className="space-y-8 sm:space-y-20">
      <Hero />
      <BurnerSnap />
      <Introduction />
      <Case />
      <Relation />
      <div className="flex gap-8 justify-center items-center pb-12">
        <LinkButton label="もっと詳しく" href="/about" />
        <LinkButton label="お問い合わせ" href="/contact" />
        <LinkButton label="お申し込み" href="/application" />
      </div>
    </div>
  );
};
