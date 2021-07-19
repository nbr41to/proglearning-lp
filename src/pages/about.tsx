import React from 'react';
import AboutMDX from 'src/contents-mdx/about.mdx';
import styled from 'styled-components';
const About = () => {
  return (
    <StyledAbout>
      <div className="about_markdown">
        <AboutMDX />
      </div>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  > .about_markdown {
    width: 100%;
    padding: 0 12px;
    > h2 {
      margin-top: 40px;
      ${({ theme }) => theme.sp`
        font-size: 24px;
      `}
    }
    > p {
      word-wrap: break-word;
      a {
        color: blue;
        text-decoration: underline;
      }
    }
  }
`;
