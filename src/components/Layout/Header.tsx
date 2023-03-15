import Link from 'next/link';
import Image from 'next/image';
import logo1 from 'src/assets/proglab-logo01.png';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="fixed z-50 w-full bg-white/80 shadow backdrop-blur-sm">
      <div className="flex justify-center items-center py-2 px-2 mx-auto max-w-[1024px] sm:justify-between sm:px-6">
        <div className="flex gap-1 items-center cursor-pointer sm:gap-2" onClick={() => router.push('/')}>
          <div className="block sm:hidden">
            <Image src={logo1} width={40} height={36} />
          </div>
          <div className="hidden sm:block">
            <Image src={logo1} width={54} height={50} />
          </div>
          <div className="font-baloo text-2xl font-bold text-slate-700 sm:text-3xl sm:font-normal">progLearning</div>
        </div>
        <div className="hidden justify-end py-4 ml-auto sm:flex">
          <nav className="flex gap-7">
            <Link href="/">
              <a className={pathname === '/' ? 'text-gray-700' : 'text-gray-400'}>HOME</a>
            </Link>
            <Link href="/about">
              <a className={pathname === '/about' ? 'text-gray-700' : 'text-gray-400'}>ABOUT</a>
            </Link>
            <Link href="/blog">
              <a className={pathname === '/blog' ? 'text-gray-700' : 'text-gray-400'}>BLOG</a>
            </Link>
            <Link href="/contact">
              <a className={pathname === '/contact' ? 'text-gray-700' : 'text-gray-400'}>CONTACT</a>
            </Link>
          </nav>
          <div className="hidden relative pl-6 ml-6 border-l-2 md:block">
            <Link href="https://www.proglearning.org/entry">
              <a className="py-3 px-4 font-bold text-white bg-amber-400 rounded-md shadow">お申し込み</a>
            </Link>
            <div className="absolute -top-4 -right-2 w-4 h-4">
              <div className="absolute w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute w-4 h-4 bg-red-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
