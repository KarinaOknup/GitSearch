import React from "react";
import ReactPaginate from "react-paginate";
import { useState , useEffect} from "react";
import "./Repositories.css";
import Load from "../../Load/Load";
import RepItem from "./RepItem/RepItem";

const PER_PAGE = 4;

function Repositories(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  setPageCount(Math.ceil(props.length / PER_PAGE));

  useEffect(() => {
    console.log("в useEffect")
    if (currentPage === 0) {
      console.log("внутри условия useEffect");
      handleFetch (`https://api.github.com/users/${props.user_name}/repos?per_page=${PER_PAGE}&page=1`);
    }
  }, [currentPage]);

  const handleFetch = (url) => {
    console.log("внутри handleFetch");
    setIsLoaded(false);
    console.log(currentPage);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setData(result);
      })
      .catch((error) => console.error("Error", error));
  };

  const handlePageClick = (selectedObject) => {
    setCurrentPage(selectedObject.selected);
    handleFetch(`https://api.github.com/users/${props.user_name}/repos?per_page=${PER_PAGE}&page=${currentPage}`);
  };

  if (props.length <= 4) {
    return (
      <div className="repositories">
        <h2>Repositories ({props.length})</h2>
        {isLoaded ? (
          data.map((repItem) => {
            return (
              <RepItem
                description={repItem.description}
                url={repItem.svn_url}
                name={repItem.name}
                key={repItem.id}
              />
            );
          })
        ) : (
          <Load/>
        )}
      </div>
    );
  } else {
    return (
      <div className="repositories">
        <h2>Repositories ({props.length})</h2>

        {isLoaded ? (
          data.map((repItem) => {
            return (
              <RepItem
                description={repItem.description}
                url={repItem.svn_url}
                name={repItem.name}
                key={repItem.id}
              />
            );
          })
        ) :
        (
          <Load/>
        )}
        {isLoaded ?
           (
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
          <Load/>
        )}
      </div>
    );
  }
}

export default Repositories;