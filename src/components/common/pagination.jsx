import React from "react";
import _ from "lodash";
//Lodash is a Optimized version of Underscore Library
//This component will take some Input and will give some output
//will map page number to each item
//Input:PageCount & pageSize & this page will also raise an event when a page is clicked
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  //Calculate the number of pages and create a array from page no 1 to pageCount
  //this will be done through Lodash
  //this will convert the pagecount to smallest integer if it is float
  //Will then Highlight the Active class by applying dynamic "active" class

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); //return a array

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        {/* { <li className="page-item">
          <a className="page-link">1</a>
        </li>} */}
      </ul>
    </nav>
  );
};
export default Pagination;
