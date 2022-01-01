import Link from 'next/link';

type Props = {
  className?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  href: string;
};

export const LinkButton: React.FC<Props> = ({ className, primary = false, size = 'medium', label, href }) => {
  const bgNames = `${primary ? 'bg-teal-300' : 'bg-amber-400'}`;
  const sizeNames = { small: 'text-sm px-2 py-2', medium: 'px-5 py-3', large: 'text-xl px-4 py-2' }[size];

  return (
    <Link href={href}>
      <a
        className={`${className}
          ${bgNames}
          ${sizeNames} 
          rounded-md text-white font-bold shadow-lg inline-block
          hover:brightness-95
        `}
      >
        {label}
      </a>
    </Link>
  );
};
