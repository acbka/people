import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";
interface TabMenuPropsType {
  menuItem: {
     id: number;
    title: string;
  };
  activeTab: number;
  handleClick: (arg: number) => void;
}
type ActiveProps = {
  active: boolean;
};

const MenuItem = styled.button<ActiveProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #718096;
  padding: 15px 20px 30px 20px;
  ${(props) => ({
    color: props.active ? "#db38ed" : "#718096",
    borderBottomColor: props.active ? "#db38ed" : "transparent",
  })}
`;

const TabButton = ({
  menuItem,
  activeTab,
  handleClick,
}: TabMenuPropsType): ReactElement => {
  return (
    <MenuItem
      active={activeTab === menuItem.id}
      onClick={() => {
        handleClick(menuItem.id);
      }}
    >
      {menuItem.title}
    </MenuItem>
  );
};

export default TabButton;
