import React from 'react';

export default function Pagination(props) {
  const { itemsCount, itemPerPage, currentPage, onPageChange } = props;
  let pages = [];
  const pagesCount = Math.ceil(itemsCount / itemPerPage);
  if (pagesCount === 1) return null;
  for (let i = 0; i < pagesCount; i++) pages.push(i + 1);

  return (
    <div className="pagibox">
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={currentPage === page ? 'active pbtn' : 'pbtn'}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
}
