import Link from 'next/link';
import Image from 'next/image';
import logo1 from 'src/assets/proglab-logo01.png';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="px-8 py-2 flex justify-between items-center shadow">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push('/')}>
        <div className="image_container">
          <Image src={logo1} width={54} height={50} />
        </div>
        <h1 className="text-3xl text-gray-700">progLearning</h1>
      </div>
      <nav className="flex gap-4">
        <Link href="/">
          <a className={pathname === '/' ? 'text-orange-400' : ''}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={pathname === '/about' ? 'text-orange-400' : ''}>ABOUT</a>
        </Link>
        <Link href="/activities">
          <a className={pathname === '/activities' ? 'text-orange-400' : ''}>ACTIVITIES</a>
        </Link>
        <Link href="/contact">
          <a className={pathname === '/contact' ? 'text-orange-400' : ''}>CONTACT</a>
        </Link>
      </nav>
    </header>
  );
};
