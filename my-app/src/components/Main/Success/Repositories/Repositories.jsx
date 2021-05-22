import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import "./Repositories.css";
import RepItem from "./RepItem/RepItem";

const PER_PAGE = 4;

function Repositories(props) {
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const currentPageData = props.repos
    .slice(offset, offset + PER_PAGE)
    .map((repItem) => (
      <RepItem
        description={repItem.description}
        url={repItem.svn_url}
        name={repItem.name}
        key={repItem.id}
      />
    ));

  const pageCount = Math.ceil(props.repos.length / PER_PAGE);

  return (
    <div className="repositories">
      <h2>Repositories ({props.repos.length})</h2>
      <div className="rep-box">{currentPageData}</div>
      <div className="pag-box">
        <span>
          {!((currentPage + 1) * 4 >= props.repos.length)
            ? (currentPage + 1) * 4
            : props.repos.length}{" "}
          of {props.repos.length} items
        </span>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pag-nav"}
          nextLinkClassName={"pag-nav"}
          disabledClassName={"pag-nav--disabled"}
          activeClassName={"pag-nav--active"}
        />
      </div>
    </div>
  );
}

export default Repositories;
