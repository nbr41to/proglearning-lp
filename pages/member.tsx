import { VFC } from 'react';
import styled from 'styled-components';

const MemberPage: VFC = () => {
  return (
    <StyledMemberPage>
      <h2>会員専用ページ</h2>
      <button>ログイン</button>
    </StyledMemberPage>
  );
};

const StyledMemberPage = styled.div``;

export default MemberPage;
