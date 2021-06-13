import styled from 'styled-components';
import Link from 'next/link';
export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link href="/">
          <h1>progLab</h1>
        </Link>
        <nav>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
          {/* <Link href="/">
            <a>MEMBER</a>
          </Link> */}
        </nav>
      </HeaderStyled>
      {process.browser && location.pathname === '/' && (
        <StyledImage>
          <img src="/progLab.002.png" />
        </StyledImage>
      )}
    </>
  );
};

const HeaderStyled = styled.header`
  font-family: 'Apple LiGothic', sans-serif;
  font-size: 26px;
  color: aquamarine;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    padding: 16px 24px;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    a {
      padding: 16px 24px;
      &:hover {
        color: orange;
        transition: 0.6s;
      }
    }
  }
`;

const StyledImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
