import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../Helper/usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('pagination gap-2 px-1', { [className]: className })}>
      <li className={classnames('page-item previous', { disabled: currentPage === 1 })} onClick={onPrevious}>
        <a href="#" className="page-link rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </a>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="page-item">&#8230;</li>;
        }

        return (
          <li className={classnames('page-link rounded', { active: pageNumber === currentPage })} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      <li className={classnames('page-item next', { disabled: currentPage === lastPage })} onClick={onNext}>
            <a href="#" className="page-link rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
      </li>
    </ul>
  );
};

export default Pagination;
