import Image from "next/image"
import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footerContents">
        <CopylightStyled>
          Copylight 2021
        <span>progLab</span>
        </CopylightStyled>
        {/* <Image src="/progLab_logo.png" width={20} height={20} /> */}
        <IconStyled></IconStyled>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.header`
  font-size: 26px;
  color: #fff;
  background-color: navy;
  padding: 12px 24px;
  .footerContents {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      padding-left: 12px;
    }
  }
  `

const CopylightStyled = styled.div`
  font-size: 14px;
  margin: 0 8px;
  span {
    font-family: "Apple LiGothic",sans-serif;
    font-size: 16px;
    margin: 0 6px;
  }
`
const IconStyled = styled.div``