import React from "react";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import "./Repositories.css";
import Load from "../../Load/Load";
import RepItem from "./RepItem/RepItem";

const PER_PAGE = 4;

function Repositories(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const pageCount = Math.ceil(props.length / PER_PAGE);

  useEffect(() => {
      handleFetch(
      `https://api.github.com/users/${
        props.user_name
      }/repos?per_page=${PER_PAGE}&page=${currentPage + 1}`
    );
  }, [currentPage,props.user_name]);


  const handleFetch = (url) => {
    console.log('я пришёл к тебе с привет, рассказать что солнце встало')
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          alert(error);
        }
      )
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const currentPageData = data.map((repItem) => {
    return (
      <RepItem
        description={repItem.description}
        url={repItem.svn_url}
        name={repItem.name}
        key={repItem.id}
      />
    );
  });

  if (props.length <= 4) {
    return (
      <div className="repositories">
        <h2>Repositories ({props.length})</h2>
        <div className="rep-box">{isLoaded ? currentPageData : <Load />}</div>
      </div>
    );
  } else {
    return (
      <div className="repositories">
        <h2>Repositories ({props.length})</h2>
        <div className="rep-box">{isLoaded ? currentPageData : <Load />}</div>
        {isLoaded ? (
          <div className="pag-box">
            <span>
              {!((currentPage + 1) * 4 >= props.length)
                ? (currentPage + 1) * 4
                : props.length}{" "}
              of {props.length} items
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
        ) : (
          <Load />
        )}
      </div>
    );
  }
}

export default Repositories;
