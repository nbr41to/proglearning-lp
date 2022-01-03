import { useCallback, useLayoutEffect, useState } from 'react';
import burner0 from 'src/assets/top_burner/0.png';
import burner1 from 'src/assets/top_burner/1.png';
import burner2 from 'src/assets/top_burner/2.png';
import burner3 from 'src/assets/top_burner/3.png';
import burner4 from 'src/assets/top_burner/4.png';
import { BurnerItem } from './BurnerItem';

/* バナーの画像とリンク先の設定 */
const burnerItems = [
  {
    href: '/contact',
    imageSrc: burner0,
  },
  {
    href: '/about/proglearning',
    imageSrc: burner1,
  },
  {
    href: '/about/proglearning',
    imageSrc: burner2,
  },
  {
    href: '/about/proglearning',
    imageSrc: burner3,
  },
  {
    href: '/about/proglearning',
    imageSrc: burner4,
  },
];

export const BurnerSnap = () => {
  /* 現在のスクロールの番号 */
  const [viewIndex, setViewIndex] = useState(0);

  /* 次のバナーへスクロール */
  const nextView = useCallback(() => {
    let nextIndex = viewIndex + 1;
    if (nextIndex === burnerItems.length) {
      nextIndex = 0;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    container.scrollTo({ left: target.offsetLeft - 50, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 前へのバナーへスクロール */
  const prevView = useCallback(() => {
    let nextIndex = viewIndex - 1;
    if (nextIndex === -1) {
      nextIndex = burnerItems.length - 1;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    container.scrollTo({ left: target.offsetLeft - 50, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 選択したバナーにスクロール */
  const handleViewChange = (viewIndex: number) => {
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + viewIndex);
    container.scrollTo({ left: target.offsetLeft - 50, behavior: 'smooth' });
    setViewIndex(viewIndex);
  };

  /* バナーを自動送りに */
  useLayoutEffect(() => {
    const nextTimer = setTimeout(() => {
      nextView();
    }, 5000);
    return () => {
      clearTimeout(nextTimer);
    };
  }, [viewIndex, nextView]);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <button className="hidden sm:block" onClick={prevView}>
          <i className="text-slate-300 bx bxs-chevron-left bx-lg"></i>
        </button>
        <div id="container" className="flex overflow-x-auto gap-6 py-4 w-[760px] snap-x">
          <div className="shrink-0 w-[56px] rounded-r-lg shadow-md snap-center"></div>
          {burnerItems.map((item, index) => (
            <BurnerItem key={'view' + index} id={'view' + index} imageSrc={item.imageSrc} href={item.href} />
          ))}
          <div className="shrink-0 w-[56px] rounded-l-lg shadow-md snap-center"></div>
        </div>
        <button className="hidden sm:block" onClick={nextView}>
          <i className="text-slate-300 bx bxs-chevron-right bx-lg"></i>
        </button>
      </div>
      <div className="py-2 space-x-4 text-center">
        {burnerItems.map((_, i) => (
          <span
            key={i}
            className={`${
              viewIndex === i ? 'rounded-full bg-slate-600' : 'bg-slate-300'
            } inline-block w-2 h-2 rounded-full cursor-pointer`}
            onClick={() => handleViewChange(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};
