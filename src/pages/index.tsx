import React from 'react';
import HomeMDX from 'src/contents-mdx/home.mdx';
import * as dev2 from 'src/assets/lottie/develop02.json';
import * as dev3 from 'src/assets/lottie/develop03.json';
import * as puzzle from 'src/assets/lottie/team_puzzle.json';
import { LottieCustom } from 'src/components/LottieCustom';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <h2 className="title">- ¥1320/月から始めるプログラミング学習 -</h2>
      <section>
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
          <LottieCustom src={dev2} />
        </div>
      </section>
      <section className="reverse">
        <div className="text">
          <h3>現役エンジニアがサポート</h3>
          <p>
            何から始めればいいかわからなくなりがちなプログラミング学習を優しくサポートします。progLabでは、教育や心理学/脳科学の知識に基づいた学習法を取り入れており、学習が続けられるような取り組みを多数用意させていただいております。また、現役エンジニアが複数名在籍しており、実務レベルのサポートができることも魅力のひとつです。
          </p>
        </div>
        <div className="lottie">
          <LottieCustom src={dev3} />
        </div>
      </section>
      <section>
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

const StyledHome = styled.div`
  font-family: ${({ theme }) => theme.fonts.base};
  > .title {
    text-align: center;
    margin-top: 28px;
    ${({ theme }) => theme.sp`
      font-size: 16px;
    `}
  }
  > section {
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
    padding: 0 32px;
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
  }
`;
