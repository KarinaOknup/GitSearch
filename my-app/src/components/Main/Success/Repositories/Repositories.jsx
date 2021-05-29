import React from "react";
import { useState, useEffect } from "react";
import Load from "../../Load/Load";
import "./Repositories.css";
import RepItem from "./RepItem/RepItem";
import Pagination from "./Pagination/Pagination";

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
  }, [currentPage, props.user_name]);

  const handleFetch = (url) => {
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
      );
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
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
            length={props.length}
          />
        ) : (
          <Load />
        )}
      </div>
    );
  }
}

export default Repositories;
