import React from "react";
import _ from "lodash";
//Lodash is a Optimized version of Underscore Library
//This component will take some Input and will give some output
//will map page number to each item
//Input:PageCount & pageSize & this page will also raise an event when a page is clicked
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  console.log(itemsCount, pageSize);
  //Calculate the number of pages and create a array from page no 1 to pageCount
  //this will be done through Lodash
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1); //return a array
  console.log(pages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
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
