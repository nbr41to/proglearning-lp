import { ReactNode, VFC } from 'react';

type Props = {
  label: string;
  icon: ReactNode;
};

export const ContentItem: VFC<Props> = ({ label, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-28 h-28 bg-white rounded-md shadow-md">
      <div>{icon}</div>
      <div className="mt-2 text-sm">{label}</div>
    </div>
  );
};
