import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";

type PaginationItemProps = {
  isActive: boolean;
  isHidden: boolean;
  pageNumber: number;
  onClick: () => void;
};

type PaginationItemStyleProps = {
  isActive: boolean;
  isHidden: boolean;
};

const Item = styled.button<PaginationItemStyleProps>`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border: 1px solid #db38ed;
  border-radius: 4px;
  ${(props) => ({
    color: props.isActive ? "#fff" : "#db38ed",
    backgroundColor: props.isActive ? "#db38ed" : "#fff",
  })};
  cursor: pointer;
  &:hover {
     background: #D2D3E0;
     color: #fff;
  }
`;

const PaginationItem = ({
  pageNumber,
  onClick,
  isActive,
  isHidden,
}: PaginationItemProps): ReactElement => {
  return (
    <Item isActive={isActive} isHidden={isHidden} onClick={onClick}>
      {pageNumber}
    </Item>
  );
};

export default PaginationItem;
