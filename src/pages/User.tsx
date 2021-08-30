import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";
import { userType } from "./userType";

type UserPropsType = {
  user: userType;
  selected?: string | undefined;
  handleClick?: (arg: string | undefined) => void;
};

type UserWrapPropsType = {
  isActive: boolean;
};

const Wrapper = styled.div<UserWrapPropsType>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  background: ${(props) => (props.isActive ? "#fce8fa" : "transparent")};
`;
const UserWrap = styled.div`
  padding: 20px 0;
  box-shadow: inset 0px -1px 0px #f59bff;
  cursor: pointer;
`;

const User = ({ user, selected, handleClick }: UserPropsType): ReactElement => {
  return (
    <Wrapper
      onClick={() =>
        handleClick?.(
          selected === user.login.uuid ? undefined : user.login.uuid
        )
      }
      isActive={user.login.uuid === selected}
    >
      <UserWrap>{user.name.first} </UserWrap>
      <UserWrap>{user.name.last} </UserWrap>
      <UserWrap>{user.gender} </UserWrap>
      <UserWrap>{user.location.country} </UserWrap>
      <UserWrap>{user.email} </UserWrap>
    </Wrapper>
  );
};

export default User;
