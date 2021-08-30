import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";

type SvgButtonPropsType = {
  disabled?: boolean;
  handleClick: () => void;
  onHover: (arg: boolean) => void;
  children: React.ReactNode;
};

const ButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  min-width: 19px;
  min-height: 19px;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
`;

const SvgButton = ({
  children,
  handleClick,
  onHover,
  disabled,
}: SvgButtonPropsType): ReactElement => {
  const handleOnMouseEnter = () => {
    onHover(true);
  };
  const handleOnMouseLeave = () => {
    onHover(false);
  };

  return (
    <ButtonWrap
      onClick={handleClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      disabled={disabled}
    >
      {children}
    </ButtonWrap>
  );
};
export default SvgButton;
