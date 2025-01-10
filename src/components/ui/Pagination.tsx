import React from "react";
import "../../styles/pagination.css";
import usePagination from "../../hooks/usePagination";

interface PaginationProps {
  size: number;
  step: number;
  itemsPerPage: number;
  onClickHandler: (page: number | null) => void;
}

const Pagination = ({
  size,
  step,
  itemsPerPage,
  onClickHandler,
}: PaginationProps) => {
  const {
    currentPage,
    paginationRange,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    totalPages,
  } = usePagination({
    totalItems: size,
    itemsPerPage,
    stepCount: step,
    onClickHandler,
  });

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          className="pagination__arrow"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          &larr;
        </button>

        {paginationRange.map((page, index) => (
          <React.Fragment key={index}>
            {typeof page === "number" ? (
              <button
                key={index}
                className={`pagination__number ${
                  page === currentPage ? "pagination__number--active" : ""
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ) : (
              <span className="pagination__dots">{page}</span>
            )}
          </React.Fragment>
        ))}

        <button
          className="pagination__arrow pagination__arrow--right"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
