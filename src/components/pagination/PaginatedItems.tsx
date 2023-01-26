import React, { useState } from 'react';
import Items from './Items';
import ReactPaginate from 'react-paginate';
import './pagination.css';
import { Country } from '../types';
import { useQuery } from '../../styles/breakpoints';

interface Props {
  itemsPerPage: number;
  countries: Country[];
}

const PaginatedItems: React.FC<Props> = ({ itemsPerPage, countries }) => {
  const { isTablet } = useQuery()
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = countries.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(countries.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        pageLinkClassName={'page-link'}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={isTablet ? 3 : 5}
        pageCount={pageCount}
      />
    </>
  );
};

export default PaginatedItems;
