import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];
  const [active, setActive] = useState(1);

  const handlePaginate = (page) => {
    setActive(page);
    paginate(page);
  };
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(
      <Pagination.Item
        key={i}
        onClick={() => handlePaginate(i)}
        active={i === active}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <Pagination>
      {/* <Pagination.Prev /> */}
      {/* <Pagination.Item>{1}</Pagination.Item>; */}
      {pageNumber}
      {/* <Pagination.Next /> */}
    </Pagination>
  );
};
export default Paginate;
