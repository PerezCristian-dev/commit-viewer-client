import React, { useState } from "react";
import Icon from "./Icon";

interface PaginationProps {
  amount: number;
}

export const Pagination = ({ amount }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(amount / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = pageNumbers.map((number) => (
    <button
      key={number}
      className={`btn btn-md ${currentPage === number ? "btn-primary" : ""}`}
      onClick={() => handlePageChange(number)}
    >
      {number}
    </button>
  ));

  return (
    <div className="flex justify-center items-center px-3 p-2 w-full">
      <div className="join">
        <button
          className="btn btn-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon icon="arrow_back_ios" />
        </button>
        {renderPageNumbers}
        <button
          className="btn btn-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icon icon="arrow_forward_ios" />
        </button>
      </div>
    </div>
  );
};
