export const YouTube = () => {
  return (
    <div className="flex flex-row-reverse flex-wrap gap-8 justify-evenly items-center py-12 px-4">
      <div className="w-96">
        <h2 className="text-xl font-bold text-center">YouTubeチャンネル</h2>
        <p className="mt-6 text-sm leading-8 text-slate-500">
          プログラミング学習の効率化を目標とした学習内容をアウトプットするためのYouTubeチャンネル。同じようにつまずいた人の助けになっていれば嬉しいです。そしてなによりも、プログラミングを学ぶことの楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。
        </p>
      </div>
      <div className="w-96">
        <iframe
          className="aspect-video w-full shadow-md"
          src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};
