import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";

type ArrowButtonProps = {
  page: number;
  isDisabled: boolean;
  setPage: (arg: number) => void;
  children?: any;
};

const ArrowLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: #fff;
  margin-right: 10px;
  border: 1px solid #db38ed;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #d2d3e0;
    & > div {
      border-color: #fff;
    }
  }
  &:disabled {
    border-color: #edf2f7;
    background: transparent;
    & > div {
      border-color: #edf2f7;
    }
    &:hover {
      background: transparent;
      & > div {
        border-color: #edf2f7;
      }
    }
  }
`;

const ArrowButton = ({
  page,
  isDisabled,
  setPage,
  children,
}: ArrowButtonProps): ReactElement => {
  return (
    <>
      <ArrowLeft disabled={isDisabled} onClick={() => setPage(page)}>
        {children}
      </ArrowLeft>
    </>
  );
};

export default ArrowButton;
