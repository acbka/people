import React, { ReactElement } from "react";
import PaginationItem from "./PaginationItem";
import styled from "@emotion/styled/macro";
// import dotsIcon from "./dotsIcon.svg";
import ArrowButton from "./ArrowButton";

type PaginationProps = {
  page: number;
  pages: number;
  onPage: number;
  numberOfItems: number;
  setPage: (arg: number) => void;
};

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const PaginationWrap = styled.div`
  display: flex;
`;
// const Dots = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 37px;
//   height: 37px;
//   margin-right: 10px;
//   border: 1px solid #edf2f7;
//   border-radius: 4px;
// `;
const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  border-top: 3px solid #db38ed;
  border-left: 3px solid #db38ed;
  margin-left: 3px;
  transform: rotate(-45deg);
`;
const ArrowRight = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 3px solid #db38ed;
  border-right: 3px solid #db38ed;
  margin-right: 3px;
  transform: rotate(-45deg);
`;
const PaginationInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
  font-size: 14px;
  line-height: 23px;
  color: #718096;
`;

const Pagination = ({
  page,
  pages,
  onPage,
  numberOfItems,
  setPage,
}: PaginationProps): ReactElement => {
  const info =
    "Showing " + onPage + " items out of " + numberOfItems + " results found";

  const buttonsArray = Array.from({ length: pages }, (v, k) => k + 1).map(
    (item, index) => (
      <PaginationItem
        key={index}
        onClick={() => setPage(item)}
        isActive={page === item}
        isHidden={
          (page <= 3 && item > 5) ||
          (page > pages - 2 && item < pages - 4) ||
          (page > 3 && page <= pages - 2 && (item > page + 2 || item < page - 2))
        }
        pageNumber={item}
      />
    )
  );

  return (
    <Row>
      <ArrowButton page={page - 1} isDisabled={page === 1} setPage={setPage}>
        <ArrowLeft />
      </ArrowButton>
      <PaginationWrap>
        {/* {pages > 4 && page >= 3 && <Dots src={dotsIcon} alt="dots" />} */}
        {buttonsArray}
        {/* {pages > 4 && page > pages - 2 && <Dots src={dotsIcon} alt="dots" />} */}
      </PaginationWrap>
      {pages > 3 && (
        <ArrowButton
          page={page + 1}
          isDisabled={page === pages}
          setPage={setPage}
        >
          <ArrowRight />
        </ArrowButton>
      )}
      <PaginationInfo>{info}</PaginationInfo>
    </Row>
  );
};

export default Pagination;
