import React, { VFC } from 'react';

type Props = {
  description: {
    name: string;
    liveIn: string;
    hobby: string;
    oden: string;
    currentHappy: string;
    hope: string;
    comment?: string;
    iconColorName: string;
  };
};

export const MemberCard: VFC<Props> = ({ description }) => {
  return (
    <div className="p-4 w-80 bg-white rounded-lg divide-y">
      <div className="flex gap-4 items-center pb-2">
        <i className={`bx bxs-user-detail bx-lg ${description.iconColorName}`}></i>
        <span className="font-bold">
          {description.name}さん（{description.liveIn}）
        </span>
      </div>
      <div className="p-2 text-sm leading-6 text-slate-500">
        <div className="space-y-2">
          <div>
            <div className="font-bold">趣味や休日の過ごし方: </div>
            <div className="px-4 text-center">{description.hobby}</div>
          </div>
          <div>
            <div className="font-bold">好きなおでんの具: </div>
            <div className="px-4 text-center">{description.oden}</div>
          </div>
          <div>
            <div className="font-bold">最近嬉しかったこと: </div>
            <div className="px-4 text-center">{description.currentHappy}</div>
          </div>
          <div>
            <div className="font-bold">progLabで学びたいこと: </div>
            <div className="px-4 text-center">{description.hope}</div>
          </div>
          {!!description.comment && (
            <div>
              <div className="font-bold">コメント: </div>
              <div className="px-4 text-center">{description.comment}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
