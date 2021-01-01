import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"
export const Header = () => {
  return (
    <HeaderStyled>
      <Link href="/">
        <a className="siteLogo">
          <Image src="/progLab_logo.png" width={40} height={40} />
          <h1>progLab</h1>
        </a>
      </Link>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  font-family: "Apple LiGothic",sans-serif;
  font-size: 26px;
  color: #fff;
  background-color: navy;
  padding: 12px 24px;
  .siteLogo {
    width: 100%;
    display: flex;
    align-items: center;
    h1 {
      padding-left: 12px;
    }
  }
`