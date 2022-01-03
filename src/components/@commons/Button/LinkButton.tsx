import Link from 'next/link';

type Props = {
  className?: string;
  primary?: boolean;
  fill?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  href: string;
};

export const LinkButton: React.FC<Props> = ({
  className,
  primary = false,
  fill = false,
  size = 'medium',
  label,
  href,
}) => {
  const colorNames = `${
    primary
      ? fill
        ? 'bg-teal-300 shadow-lg font-bold'
        : 'text-teal-300'
      : fill
      ? 'bg-amber-400 shadow-lg font-bold'
      : 'text-amber-400'
  }`;
  const sizeNames = { small: 'text-sm px-2 py-2', medium: 'px-5 py-3', large: 'text-xl px-4 py-2' }[size];
  return (
    <Link href={href}>
      <a
        className={`${className}
          ${colorNames}
          ${sizeNames} 
          rounded-md text-white inline-block
          hover:brightness-95
        `}
      >
        {label}
      </a>
    </Link>
  );
};
