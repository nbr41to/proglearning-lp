import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const AboutPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="bg-slate-100 p-12 rounded-2xl">
        <p className="text-lg text-center mb-12">プログラミング学習をサポート</p>
        <div className="flex justify-center items-center flex-wrap gap-x-36 gap-y-20">
          {/* progLearning */}
          <div className="text-white  pb-12 relative">
            <div className="bg-teal-300 rounded-full w-96 h-96 flex justify-center items-center flex-col">
              <p className="text-lg">プログラミング学習コンテンツ</p>
              <h3 className="text-4xl font-bold mt-4 pb-8">progLearning</h3>
            </div>
            <div
              className="bg-sky-400 rounded-full w-36 h-36 flex justify-center items-center absolute left-0 bottom-0 cursor-pointer animate-bounce hover:animate-none active:brightness-75"
              onClick={() => router.push('/about/proglearning')}
            >
              <p className=" text-xl font-bold">詳しく</p>
            </div>
          </div>
          {/* progLab */}
          <div className="text-white  pb-12 relative">
            <div className="bg-amber-400 rounded-full w-96 h-96 flex justify-center items-center flex-col">
              <p className="text-lg">プログラミング学習コミュニティ</p>
              <h3 className="text-4xl font-bold mt-4 pb-8">progLab</h3>
            </div>
            <div
              className="bg-red-300 rounded-full w-36 h-36 flex justify-center items-center absolute left-0 bottom-0 cursor-pointer animate-bounce hover:animate-none active:brightness-75"
              onClick={() => router.push('/about/proglab')}
            >
              <p className=" text-xl font-bold">詳しく</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
