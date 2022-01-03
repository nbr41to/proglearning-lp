import Link from 'next/link';
import { VFC } from 'react';

export const Footer: VFC = () => {
  return (
    <footer className="relative bottom-0 py-8 text-gray-500 bg-slate-100">
      {/* SiteMap */}
      <div className="w-full">
        <h4 className="font-bold text-center">About more</h4>
        <div className="flex flex-wrap gap-8 justify-center items-center px-6 mt-6 text-sm underline">
          <div className="flex flex-col gap-8">
            <Link href="/about/proglearning">
              <a className="hover:text-gray-700">学習コンテンツ`progLearning`を詳しく</a>
            </Link>
            <Link href="/about/proglab">
              <a className="hover:text-gray-700">学習コミュニティ`progLab`を詳しく</a>
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <Link href="/contact">
              <a className="hover:text-gray-700">お問い合わせ</a>
            </Link>
            <Link href="/application">
              <a className="hover:text-gray-700">お申し込み</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-sm text-center text-slate-500 drop-shadow">
        Copyright 2021 progLearning. All Rights Reserved.
      </div>
    </footer>
  );
};
