import { useRouter } from 'next/router';
import { useState } from 'react';

export const SpMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const routeAndClose = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex fixed right-2 bottom-2 z-10 flex-col gap-y-2 justify-center items-center w-16 h-16 bg-slate-400/50 rounded-full cursor-pointer sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-1 bg-white/80 rounded-full"></div>
        <div className="w-8 h-1 bg-white/80 rounded-full"></div>
        <div className="w-8 h-1 bg-white/80 rounded-full"></div>
      </div>
      <div
        className={`w-full h-80 bg-slate-600/90 rounded-t-2xl fixed bottom-0 transition-all ease-in-out ${
          isOpen ? 'bottom-0' : '-bottom-full'
        }`}
      >
        <nav className="flex flex-col gap-8 justify-center items-center h-full">
          <a className="text-lg font-bold text-gray-50 cursor-pointer" onClick={() => routeAndClose('/')}>
            HOME
          </a>
          <a className="text-lg font-bold text-gray-50 cursor-pointer" onClick={() => routeAndClose('/about')}>
            ABOUT
          </a>
          <a className="text-lg font-bold text-gray-50 cursor-pointer" onClick={() => routeAndClose('/blog')}>
            BLOG
          </a>
          <a className="text-lg font-bold text-gray-50 cursor-pointer" onClick={() => routeAndClose('/contact')}>
            CONTACT
          </a>
        </nav>
      </div>
    </>
  );
};
