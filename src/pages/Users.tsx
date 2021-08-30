import React, { useState, useEffect, ReactElement } from "react";
import styled from "@emotion/styled/macro";
import User from "./User";
import { userType } from "./userType";
import Pagination from "../components/pagination/Pagination";

type UsersPropsType = {
  users: userType[];
  selected?: string | undefined;
  handleClick: (arg: string | undefined) => void;
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Header = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px 0;
  border-bottom: 2px solid #db38ed;
  font-size: 16px;
`;
const UserList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 20px;
`;

const Users = ({
  users,
  selected,
  handleClick,
}: UsersPropsType): ReactElement => {
  const perPage = 10;
  const pages = Math.ceil(users.length / perPage);
  const [page, setPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState<userType[]>([]);

  useEffect(() => {
    const usersArray: userType[] = [...users].splice(
      (page - 1) * perPage,
      perPage
    );
    setUsersPerPage(usersArray);
  }, [page, users]);

  const usersList = usersPerPage.map((item, index) => (
    <User
      key={index}
      user={item}
      handleClick={handleClick}
      selected={selected}
    />
  ));
  return (
    <Wrapper>
      <Header>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Gender</div>
        <div>Country</div>
        <div>Email</div>
      </Header>
      <UserList>{usersList}</UserList>
      <Pagination
        page={page}
        pages={pages}
        onPage={usersPerPage.length}
        numberOfItems={users.length}
        setPage={setPage}
      />
    </Wrapper>
  );
};

export default Users;
