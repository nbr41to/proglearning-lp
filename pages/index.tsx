import React from 'react';
import HomeMDX from 'src/contents-mdx/home.mdx';
import * as develop01 from 'src/assets/lottie/develop01.json';
import * as develop02 from 'src/assets/lottie/develop02.json';
import * as puzzle from 'src/assets/lottie/team_puzzle.json';
import { LottieCustom } from 'src/components/LottieCustom';
import styled from 'styled-components';
import Script from 'next/script';

const Home = () => {
  return (
    <StyledHome>
      <h2 className="title">progLearning から発足された progLab</h2>
      <section className="proglearning_section">
        <h3>プログラミングを好き勝手学んでいる人のYouTubeチャンネル</h3>
        <div className="subscribe_button">
          <div
            className="g-ytsubscribe"
            data-channelid="UCPcjWvYIfvqGPP4x30kEkMA"
            data-layout="full"
            data-count="default"
          ></div>
          <Script src="https://apis.google.com/js/platform.js" />
        </div>
        <div className="latest_video">
          <iframe
            id="latest_video"
            // src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA" // 最新の動画にしたい
            src="https://www.youtube.com/embed/uRploOYd84w"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          <label htmlFor="latest_video">progLearning の動画</label>
        </div>
        <p></p>
      </section>
      <h2 className="title">- ¥1320/月から始めるプログラミング学習 -</h2>
      <section className="proglab_section">
        <div className="text">
          <h3>こんな経験ありませんか？</h3>
          <ul>
            <li>プログラミング学習に挫折🙉</li>
            <li>一人だと勉強できない🙉</li>
            <li>HTML/CSSやJavaScriptを勉強して止まっている🙉</li>
            <li>gitやGitHubの使い方わからん🙉</li>
            <li>実務経験の積み方がわからない🙉</li>
          </ul>
        </div>
        <div className="lottie">
          <LottieCustom src={develop01} />
        </div>
      </section>
      <section className="proglab_section reverse">
        <div className="text">
          <h3>現役エンジニアがサポート</h3>
          <p>
            何から始めればいいかわからなくなりがちなプログラミング学習を優しくサポートします。progLabでは、教育や心理学/脳科学の知識に基づいた学習法を取り入れており、学習が続けられるような取り組みを多数用意させていただいております。また、現役エンジニアが複数名在籍しており、実務レベルのサポートができることも魅力のひとつです。
          </p>
        </div>
        <div className="lottie">
          <LottieCustom src={develop02} />
        </div>
      </section>
      <section className="proglab_section">
        <div className="text">
          <h3>共同開発経験ができる</h3>
          <p>
            progLabでは共同開発の経験が手軽にできます。2〜4人のメンバーを募り、ひとつのWebアプリケーションを作る中で、多種多様な技術力の向上を図ることが可能です。また、共同開発の中で、gitやGitHubの使い方も学ぶことができます。
          </p>
        </div>
        <div className="lottie">
          <LottieCustom src={puzzle} />
        </div>
      </section>
      <div className="home_markdown">
        <HomeMDX />
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.article`
  font-family: ${({ theme }) => theme.fonts.base};
  > .proglearning_section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h3 {
      margin-top: 12px;
    }
    > .subscribe_button {
      margin: 12px;
    }
    > .latest_video {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      label {
        margin-top: 8px;
      }
    }
  }
  > .title {
    text-align: center;
    margin-top: 28px;
    ${({ theme }) => theme.sp`
      font-size: 16px;
    `}
  }
  > .proglab_section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 28px;
    margin: 60px 0;
    &.reverse {
      flex-direction: row-reverse;
    }
    ${({ theme }) => theme.sp`
      padding: 0 16px;
      flex-direction: column-reverse;
      &.reverse {
        flex-direction: column-reverse;
      }
    `}
    > .text {
      width: 50%;
      padding-left: 20px;
      h3 {
        font-size: 24px;
        text-decoration: underline;
      }
      ${({ theme }) => theme.sp`
        width: 100%;
        font-size: 16px;
        margin-top: 20px;
        padding: 0;
        h3 {
          text-align: center;
          font-size: 20px;
        }
        `}
    }

    > .lottie {
      width: 400px;
      ${({ theme }) => theme.sp`
        width: 260px;
        `}
    }
  }

  > .home_markdown {
    width: 100%;
    padding: 0 48px;
    ${({ theme }) => theme.sp`
      padding: 0 16px;
    `}
    > h2 {
      margin-top: 40px;
      &:before {
        content: '#';
        margin-right: 4px;
      }
      ${({ theme }) => theme.sp`
        font-size: 20px;
        text-align: center;
      `}
    }
    > p {
      word-wrap: break-word;
      > a {
        display: block;
        text-align: center;
        color: blue;
        text-decoration: underline;
      }
    }
    ul {
      padding-left: 16px;
    }
  }
`;
