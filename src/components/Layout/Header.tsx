import Link from 'next/link';
import Image from 'next/image';
import logo1 from 'src/assets/proglab-logo01.png';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="fixed z-50 w-full bg-white shadow">
      <div className="flex flex-wrap justify-center items-center py-2 px-2 mx-auto max-w-[1024px] sm:justify-between sm:px-8">
        <div className="flex gap-2 items-center mr-6 cursor-pointer sm:gap-4" onClick={() => router.push('/')}>
          <div className="block sm:hidden">
            <Image src={logo1} width={40} height={36} />
          </div>
          <div className="hidden sm:block">
            <Image src={logo1} width={54} height={50} />
          </div>
          <div className="text-2xl font-bold text-slate-700 sm:text-3xl sm:font-normal">progLearning</div>
        </div>
        <div className="hidden justify-end py-4 ml-auto sm:flex">
          <nav className="flex gap-8">
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
          <div className="pl-8 ml-8 border-l-2">
            <Link href="/application">
              <a className="py-3 px-4 font-bold text-white bg-amber-400 rounded-md border">お申し込み</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
