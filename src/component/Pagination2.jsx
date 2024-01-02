import React from "react";
import { returnPaginationRange } from "./appUtils";
function Pagination(props) {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&laquo;")}
          >
            &laquo;
          </span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&lsaquo;")}
          >
            &lsaquo;
          </span>
        </li>
        {array.map((value) => {
          if (value == props.page) {
            return (
              <li key={value} className="page-item">
                <span
                  className="page-link active"
                  onClick={() => props.onPageChange(value)}
                >
                  {value}
                </span>
              </li>
            );
          } else {
            return (
              <li key={value} className="page-item">
                <span
                  className="page-link"
                  onClick={() => props.onPageChange(value)}
                >
                  {value}
                </span>
              </li>
            );
          }
        })}

        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&rsaquo;")}
          >
            &rsaquo;
          </span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&raquo;")}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
