import Image from 'next/image';
import { useCallback, useLayoutEffect, useState } from 'react';
import test from 'src/assets/first-view.jpg';
import burner1 from 'src/assets/top_burner/1.png';
import burner2 from 'src/assets/top_burner/2.png';
import burner3 from 'src/assets/top_burner/3.png';
import burner4 from 'src/assets/top_burner/4.png';

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
  const handleViewChange = (viewIndex: number) => {
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
        <button className="hidden sm:block" onClick={prevView}>
          <i className="text-slate-300 bx bxs-chevron-left bx-lg"></i>
        </button>
        <div id="container" className="flex overflow-x-auto gap-6 py-4 w-[760px] snap-x">
          <div className="shrink-0 w-[36px] rounded-r-lg shadow-md snap-center"></div>
          <div id="view1" className="shrink-0 w-[280px] rounded-lg shadow-md snap-center sm:w-[600px]">
            <Image src={burner1} />
          </div>
          <div id="view2" className="shrink-0 w-[280px] rounded-lg shadow-md snap-center sm:w-[600px]">
            <Image src={burner2} />
          </div>
          <div id="view3" className="shrink-0 w-[280px] rounded-lg shadow-md snap-center sm:w-[600px]">
            <Image src={burner3} />
          </div>
          <div id="view4" className="shrink-0 w-[280px] rounded-lg shadow-md snap-center sm:w-[600px]">
            <Image src={burner4} />
          </div>
          <div className="shrink-0 w-[36px] rounded-l-lg shadow-md snap-center"></div>
        </div>
        <button className="hidden sm:block" onClick={nextView}>
          <i className="text-slate-300 bx bxs-chevron-right bx-lg"></i>
        </button>
      </div>
      <div className="py-2 space-x-4 text-center">
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
