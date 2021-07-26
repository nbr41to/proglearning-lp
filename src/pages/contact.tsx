import { useState } from 'react';
import styled from 'styled-components';
import LineIcon from 'src/assets/contact_icon/LINE_Brand_icon.svg';
import TwitterIcon from 'src/assets/contact_icon/Twitter_icon.svg';
import YouTubeIcon from 'src/assets/contact_icon/YouTube_icon.svg';
import GitHubIcon from 'src/assets/contact_icon/GitHub_icon.svg';

const Contact = () => {
  const [openApplicate, setOpenApplicate] = useState(false);
  return (
    <StyledContact>
      <h1>#CONTACT</h1>
      <div className="sns_icon_container">
        <a className="icon" href="https://lin.ee/JYDAgcH" target="_blank" rel="noopener noreferrer">
          <LineIcon />
        </a>
        <a className="icon twitter" href="https://twitter.com/Knob_nbr41to" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a
          className="icon youtube"
          href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
        <a className="icon github" href="https://github.com/prog-learning" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p>質問など気軽にお問い合わせください！</p>
      <div className="applicate_button" onClick={() => setOpenApplicate(true)}>
        お申し込みの方はコチラ
      </div>
      {openApplicate && (
        <div className="application">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgBXSg-I3s7znuAiDB1pa7HO6_2lxw7UOZ4waFeSVGEHZXOA/viewform?embedded=true"
            width="100%"
            height="1000px"
            frameBorder="0"
          >
            読み込んでいます…
          </iframe>
        </div>
      )}
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  text-align: center;
  > h1 {
    color: ${(props) => props.theme.colors.main};
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 16px;
    ${(props) => props.theme.sp`
      font-size: 28px;
      `}
  }
  .sns_icon_container {
    margin: 0 auto;
    ${(props) => props.theme.sp`
      max-width: 200px;
    `}
    > .icon {
      display: inline-block;
      > svg {
        width: 100px;
      }
    }
    > .twitter {
      > svg {
        width: 100px;
        padding: 12.5px;
        fill: #1da1f2;
      }
    }
    > .youtube,
    .github {
      > svg {
        width: 100px;
        padding: 12.5px;
      }
    }
  }

  .applicate_button {
    display: inline-block;
    text-align: center;
    padding: 20px 28px;
    margin: 16px 0;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: ${(props) => props.theme.colors.main};
    user-select: none;
    cursor: pointer;
    &:hover {
      transform: scale(0.98);
      filter: brightness(0.96);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  > .application {
    width: 100%;
  }
`;
