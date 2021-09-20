import { VFC } from 'react';
import styled from 'styled-components';

export type BigButtonProps = {
  className?: string;
  label: string;
  onClick?: () => void;
};

export const BigButton: VFC<BigButtonProps> = ({ className, label, onClick }) => {
  return (
    <StyledBigButton className={`${className}`} onClick={onClick}>
      <span className="btn-emergency-bottom"></span>
      <span className="btn-emergency-top">
        <span>{label}</span>
      </span>
    </StyledBigButton>
  );
};

const StyledBigButton = styled.div`
  position: relative;

  display: block;
  cursor: pointer;

  width: 200px;
  height: 130px;

  &:hover .btn-emergency-top {
    top: 10px;

    height: 50px;
  }

  &:active .btn-emergency-top {
    top: 20px;

    height: 40px;
  }

  .btn-emergency-top {
    position: absolute;
    top: 0;
    left: 20px;

    width: 160px;
    height: 60px;
    margin-top: 30px;

    transition: all 0.3s;

    border-radius: 0 0 50% 50%;
    background: #d62d2d;
  }

  .btn-emergency-top:before {
    position: absolute;
    top: -30px;
    left: 0;

    width: 160px;
    height: 60px;

    content: '';

    border-radius: 80px / 30px;
    background: #ed4c4c;
  }

  .btn-emergency-top span {
    font-size: 38px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;

    position: absolute;
    top: -28px;
    left: 0;

    width: 100%;

    transform: scaleY(0.75);
    text-align: center;

    color: #f6a3a3;
  }

  .btn-emergency-bottom {
    position: absolute;
    top: 38px;
    left: 0;

    width: 200px;
    height: 80px;

    border-radius: 100px / 40px;
    background: #d8e4ea;
    box-shadow: 0 8px 0 #c4cacc;
  }
`;
