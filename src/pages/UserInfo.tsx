import React, { ReactElement } from "react";
import styled from "@emotion/styled/macro";
import { userType } from "./userType";

type UserInfoPropsType = {
  user: userType;
  selected?: number | null;
  handleClick?: (arg: number | null) => void;
};

const Wrapper = styled.div`
  width: 30%;
  min-width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserPhoto = styled.img`
  width: 160px;
  heght: auto;
  display: block;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const InfoBlock = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: left;
  //   justify-content: space-between;
  padding-bottom: 20px;
`;
const UserName = styled.h3`
  padding-top: 20px;
  text-align: center;
  //   display: flex;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = ({
  user,
  selected,
  handleClick,
}: UserInfoPropsType): ReactElement => {
  const name = user.name.title + " " + user.name.first + " " + user.name.last;
  return (
    <Wrapper>
      <div>
        <UserPhoto src={user.picture.medium} />
        <UserName>
          {/* {user.name.title}
              {user.name.first}
              {user.name.last} */}
          {name}
        </UserName>
      </div>
      <InfoWrap>
        <InfoBlock>
          <h4>Phone</h4>
          {user.phone}
        </InfoBlock>
        <InfoBlock>
          <h4>Email</h4>
          {user.email}
        </InfoBlock>
        <Address>
          <h4>Address</h4>
          <p>Country: {user.location.country}</p>
          <p>State: {user.location.state}</p>
          <p>City: {user.location.city}</p>
          <p>
            Street: {user.location.street.name}, {user.location.street.number}{" "}
          </p>
        </Address>
      </InfoWrap>
    </Wrapper>
  );
};
export default UserInfo;
