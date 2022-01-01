import Image from 'next/image';
import { useCallback, useLayoutEffect, useState } from 'react';
import test from 'src/assets/first-view.jpg';

export const BurnerSnap = () => {
  /* 現在のスクロースの番号 */
  const [viewIndex, setViewIndex] = useState(1);

  /* 次のバナーへスクロール */
  const nextView = useCallback(() => {
    let nextIndex = viewIndex + 1;
    if (nextIndex === 5) {
      nextIndex = 1;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 前へのバナーへスクロール */
  const prevView = useCallback(() => {
    let nextIndex = viewIndex - 1;
    if (nextIndex === 0) {
      nextIndex = 4;
    }
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + nextIndex);
    container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    setViewIndex(nextIndex);
  }, [viewIndex]);

  /* 選択したバナーにスクロール */
  const handleViewChange = (viewIndex) => {
    const container = window.document.getElementById('container');
    const target = window.document.getElementById('view' + viewIndex);
    container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
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
        <button onClick={prevView}>
          <i className="text-slate-300 bx bxs-chevron-left bx-lg"></i>
        </button>
        <div id="container" className="flex overflow-x-auto gap-6 mx-4 w-[760px] snap-x">
          <div className="shrink-0 w-[36px] snap-center"></div>
          <div id="view1" className="shrink-0 w-[600px] snap-center">
            <Image src={test} className="shrink-0 w-full rounded-lg" />
          </div>
          <div id="view2" className="shrink-0 w-[600px] snap-center">
            <Image src={test} className="shrink-0 w-full rounded-lg" />
          </div>
          <div id="view3" className="shrink-0 w-[600px] snap-center">
            <Image src={test} className="shrink-0 w-full rounded-lg" />
          </div>
          <div id="view4" className="shrink-0 w-[600px] snap-center">
            <Image src={test} className="shrink-0 w-full rounded-lg" />
          </div>
          <div className="shrink-0 w-[36px] snap-center"></div>
        </div>
        <button onClick={nextView}>
          <i className="text-slate-300 bx bxs-chevron-right bx-lg"></i>
        </button>
      </div>
      <div className="py-4 space-x-4 text-center">
        {[1, 2, 3, 4].map((i) => (
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
