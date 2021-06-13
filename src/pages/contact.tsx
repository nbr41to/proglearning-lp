import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <div>
      <h1>CONTACT</h1>
      <h2>お問い合わせ</h2>
      <form action="">
        <label htmlFor="">名前</label>
        <input type="text" />
        <br />
        <label htmlFor="">メール</label>
        <input type="text" />
        <br />
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <br />
        <button type="submit">送信</button>
      </form>
      <br />
      <h2>お申し込み</h2>
      <p>お申し込みは以下よりお願いいたします</p>
      <StyledApplicate>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdgBXSg-I3s7znuAiDB1pa7HO6_2lxw7UOZ4waFeSVGEHZXOA/viewform?embedded=true"
          width="100%"
          height="1000px"
          frameBorder="0"
        >
          読み込んでいます…
        </iframe>
      </StyledApplicate>
    </div>
  );
};

export default Contact;

const StyledApplicate = styled.div`
  width: 100%;
`;
