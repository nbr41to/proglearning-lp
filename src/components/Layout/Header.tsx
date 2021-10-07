import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo1 from 'src/assets/proglab-logo01.png';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <HeaderStyled>
        <Link href="/">
          <div className="site_logo">
            <div className="image_container">
              <Image src={logo1} />
            </div>
            <h1>progLab</h1>
          </div>
        </Link>
        <nav>
          <Link href="/">
            <a className={pathname === '/' ? 'current' : ''}>HOME</a>
          </Link>
          <Link href="/about">
            <a className={pathname === '/about' ? 'current' : ''}>ABOUT</a>
          </Link>
          <Link href="/contact">
            <a className={pathname === '/contact' ? 'current' : ''}>CONTACT</a>
          </Link>
          {/* <Link href="/closer">
            <a>MEMBER</a>
          </Link> */}
        </nav>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  font-family: 'Apple LiGothic', sans-serif;
  font-size: 26px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.sp`
    justify-content: center;
    flex-wrap: wrap;
    `}

  .site_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ theme }) => theme.sp`
      width: 100%;
      background-color: #fff;
      color: ${({ theme }) => theme.colors.main};
      `}
    .image_container {
      margin-top: 8px;
      margin-left: 20px;
      width: 60px;
      filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.3));
      ${({ theme }) => theme.sp`
        width: 50px;
      `}
    }
    > h1 {
      padding: 16px 20px;
      text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
    }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    ${({ theme }) => theme.sp`
      justify-content: space-around;
    `}
    > a {
      padding: 8px 24px;
      border-left: 1px solid #cffff1;
      ${({ theme }) => theme.sp`
        border-left: none;
      `}
      &.current {
        color: ${(props) => props.theme.colors.orange};
      }
      &:hover {
        color: ${(props) => props.theme.colors.orange};
        transition: 0.6s;
      }
    }
  }
`;
