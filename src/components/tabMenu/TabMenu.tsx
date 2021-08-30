import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";
import TabButton from "./TabButton";

interface TabMenuPropsType {
  menuItems: {
    id: number;
    title: string;
  }[];
  activeTab: number;
  handleClick: (arg: number) => void;
}

const Wrapper = styled.div`
  display: flex;
`;
const TabMenu = ({
  menuItems,
  activeTab,
  handleClick,
}: TabMenuPropsType): ReactElement => {
  const menuList = menuItems.map((item, index) => (
    <TabButton
      key={index}
      menuItem={item}
      activeTab={activeTab}
      handleClick={handleClick}
    />
  ));

  return <Wrapper>{menuList}</Wrapper>;
};

export default TabMenu;
