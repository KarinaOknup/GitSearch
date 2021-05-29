import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Repositories(props) {
  return (
    <div className="pag-box">
      <span>
        {!((props.currentPage + 1) * 4 >= props.length)
          ? (props.currentPage + 1) * 4
          : props.length}{" "}
        of {props.length} items
      </span>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={props.pageCount}
        onPageChange={props.handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pag-nav"}
        nextLinkClassName={"pag-nav"}
        disabledClassName={"pag-nav--disabled"}
        activeClassName={"pag-nav--active"}
      />
    </div>
  );
}

export default Repositories;
