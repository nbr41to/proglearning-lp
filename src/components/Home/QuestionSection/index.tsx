import { useState } from 'react';
import { QuestionItem } from './QuestionItem';

const questionTextList = [];

export const QuestionSection = () => {
  const [checkedState, setCheckedState] = useState([]);
  const handleChange = (index: number) => {
    const newCheckedState = checkedState.slice();
    newCheckedState[index] = !newCheckedState[index];
    setCheckedState(newCheckedState);
  };

  return (
    <div className="">
      <h2>こんな経験ありませんか？</h2>
      <div>
        <QuestionItem text="" checked={!!checkedState[0]} handleChange={() => handleChange(0)} />
      </div>
    </div>
  );
};
