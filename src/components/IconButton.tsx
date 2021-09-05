import styled from "@emotion/styled/macro";

type IconButtonPropsType = {
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick: () => void;
};
type StyledBtnPropsType = {
  isActive?: boolean;
  disabled?: boolean;
};

const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-pink);
  ${(props) => ({
    background: props.isActive ? "var(--color-pink)" : "var(--color-white)",
    color: props.isActive ? "var(--color-white)" : "var(--color-pink)",
  })};
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: var(--color-grey);
  }
  &:disabled {
    background: var(--color-grey);
    color: var(--color-pink);
  }
`;

const IconButton = ({
  isActive,
  disabled,
  children,
  handleClick,
}: IconButtonPropsType) => {
  return (
    <StyledBtn isActive={isActive} disabled={disabled} onClick={handleClick}>
      {children}
    </StyledBtn>
  );
};

export default IconButton;
