import { VFC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  id: string;
  href: string;
  imageSrc: StaticImageData;
};

export const BurnerItem: VFC<Props> = ({ href, imageSrc, id }) => {
  const router = useRouter();

  return (
    <div
      id={id}
      className="shrink-0 w-[280px] rounded-lg shadow-md cursor-pointer snap-center sm:w-[600px]"
      onClick={() => router.push(href)}
    >
      <Image src={imageSrc} />
    </div>
  );
};
