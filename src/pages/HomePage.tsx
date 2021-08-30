import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { userType } from "./userType";
import Users from "./Users";
import TabMenu from "../components/tabMenu/TabMenu";
import { tabs } from "./tabs";
import SvgButton from "../components/svgButton/SvgButton";
import FilterIcon from "../components/svgButton/svg-components/FilterIcon";
import SortIcon from "../components/svgButton/svg-components/SortIcon";
import SearchIcon from "../components/svgButton/svg-components/SearchIcon";
import UserInfo from "./UserInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 40px 40px 40px 20px;
`;
const Title = styled.h1`
  letter-spacing: 1.5px;
  font-size: 3rem;
  color: #db38ed;
`;
const UserInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;
const TabMenuRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;
const Btn = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 4px;
  box-shadow: rgb(12 26 75 / 20%) 0px 0px 1px, rgb(50 50 71 / 10%) 0px 1px 3px;
`;
const UsersList = styled.div`
  display: flex;
  padding-left: 20px;
  overflow: hidden;
`;

const HomePage = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const [activeTab, setActiveTab] = useState(1);
  const [filterBtn, setFilterBtn] = useState(false);
  const [sortBtn, setSortBtn] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [showUser, setShowUser] = useState<userType | undefined>(undefined);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const url = "https://randomuser.me/api/?results=155";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  const changeTab = (value: number) => {
    setActiveTab(value);
  };

  const chooseUser = (value: string | undefined) => {
    setShowUser(users.find((user) => user.login.uuid === value));
    setSelected(value);
  };

  const filter = () => {
    console.log("filter");
  };

  const sort = () => {
    console.log("sort");
  };

  const search = () => {
    console.log("search");
  };

  return (
    <Wrapper>
      <UserInfoWrap>
        {showUser ? (
          <UserInfo user={showUser} />
        ) : (
          <Title>Choose an user</Title>
        )}
      </UserInfoWrap>
      <TabMenuRow>
        <TabMenu
          menuItems={tabs}
          activeTab={activeTab}
          handleClick={changeTab}
        />
        <ButtonsGroup>
          <Btn>
            <SvgButton handleClick={search} onHover={setSearchBtn}>
              <SearchIcon color={searchBtn ? "#db38ed" : "#8b93a6"} />
            </SvgButton>
          </Btn>
          <Btn>
            <SvgButton handleClick={filter} onHover={setFilterBtn}>
              <FilterIcon color={filterBtn ? "#db38ed" : "#8b93a6"} />
            </SvgButton>
          </Btn>
          <Btn>
            <SvgButton handleClick={sort} onHover={setSortBtn}>
              <SortIcon color={sortBtn ? "#db38ed" : "#8b93a6"} />
            </SvgButton>
          </Btn>
        </ButtonsGroup>
      </TabMenuRow>
      {!!users.length && (
        <UsersList>
          {activeTab === 1 && (
            <Users users={users} handleClick={chooseUser} selected={selected} />
          )}
          {activeTab === 2 && (
            <Users
              users={users.filter((user) => user.gender === "male")}
              handleClick={chooseUser}
              selected={selected}
            />
          )}
          {activeTab === 3 && (
            <Users
              users={users.filter((user) => user.gender === "female")}
              handleClick={chooseUser}
              selected={selected}
            />
          )}
        </UsersList>
      )}
    </Wrapper>
  );
};

export default HomePage;
