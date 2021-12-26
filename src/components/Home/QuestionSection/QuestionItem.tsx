import { VFC } from 'react';

type Props = {
  text: string;
  checked: boolean;
  handleChange: () => void;
};

export const QuestionItem: VFC<Props> = ({ text, checked, handleChange }) => {
  return (
    <div className="flex accent-blue-600">
      <p>{text}</p>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <p>はい</p>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <p>いいえ</p>
    </div>
  );
};
