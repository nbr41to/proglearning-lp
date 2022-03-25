import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';
import burner0 from 'src/assets/top_burner/0.png';
import burner1 from 'src/assets/top_burner/1.png';
import burner2 from 'src/assets/top_burner/2.png';
import burner3 from 'src/assets/top_burner/3.png';
import burner4 from 'src/assets/top_burner/4.png';
import { BannerItem } from './BannerItem';

/* バナーの画像とリンク先の設定 */
const bannerItems = [
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

export const Carousel = () => {
  /* 現在のスクロールの番号 */
  const [viewIndex, setViewIndex] = useState(0);

  /* 次のバナーへスクロール */
  const nextView = useCallback(() => {
    let nextIndex = viewIndex + 1;
    if (nextIndex === bannerItems.length) {
      nextIndex = 0;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    /* targetの左からの位置 - containerの左からの位置 - バナーの半分の距離 */
    const moveRange = target.offsetLeft - container.offsetLeft - target.offsetWidth / 2;
    container.scrollTo({ left: moveRange, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 前へのバナーへスクロール */
  const prevView = useCallback(() => {
    let nextIndex = viewIndex - 1;
    if (nextIndex === -1) {
      nextIndex = bannerItems.length - 1;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    const moveRange = target.offsetLeft - container.offsetLeft - target.offsetWidth / 2;
    container.scrollTo({ left: moveRange, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 選択したバナーにスクロール */
  const handleViewChange = (viewIndex: number) => {
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + viewIndex);
    const moveRange = target.offsetLeft - container.offsetLeft - target.offsetWidth / 2;
    container.scrollTo({ left: moveRange, behavior: 'smooth' });
    setViewIndex(viewIndex);
  };

  /* バナーを自動送りに */
  useEffect(() => {
    const nextTimer = setTimeout(() => {
      nextView();
    }, 4000);
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
        <div
          id="container"
          className="flex overflow-x-auto gap-6 py-4 w-[380px] snap-x sm:w-[640px] md:w-[760px] none-scrollbar"
        >
          <div className="shrink-0 w-[24px] rounded-r-lg shadow-md snap-center sm:w-[56px]"></div>
          {bannerItems.map((item, index) => (
            <BannerItem key={'view' + index} id={'view' + index} imageSrc={item.imageSrc} href={item.href} />
          ))}
          <div className="shrink-0 w-[24px] rounded-l-lg shadow-md snap-center sm:w-[56px]"></div>
        </div>
        <button className="hidden sm:block" onClick={nextView}>
          <i className="text-slate-300 bx bxs-chevron-right bx-lg"></i>
        </button>
      </div>
      <div className="space-x-4 text-center">
        {bannerItems.map((_, i) => (
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
