import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  itemsPerPage: number; // Add this prop for items per page
  setItemsPerPage: (value: number) => void; // Add this prop for setting items per page
}

const TablePagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  paginate,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className='mt-1 flex justify-center items-center'>
      <div className='mt-4 lg:m-4 flex gap-2 justify-center px-2 lg:px-4'>
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={isFirstPage}
          className={`size-8 md:size-10 font-semibold rounded-md ${
            isFirstPage ? 'bg-gray-500 text-gray-300' : 'bg-gray-300 text-gray-700'
          } focus:outline-none`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => {
                paginate(number);
              }}
              className={`size-8 md:size-10 rounded-md ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-400'
              } focus:outline-none`}
            >
              {number}
            </button>
            {/* Add ellipsis if there's a gap */}
            {index < pageNumbers.length - 1 && pageNumbers[index + 1] > number + 1 && (
              <span className='lg:px-4 py-2 text-gray-800'>...</span>
            )}
          </React.Fragment>
        ))}

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={isLastPage}
          className={`size-8 md:size-10 rounded-md font-semibold ${
            isLastPage ? 'bg-gray-500 text-gray-300' : 'bg-gray-300 text-gray-700'
          } focus:outline-none`}
        >
          &gt;
        </button>
      </div>
      {/* Page size selector */}
      <div className='max-w-32 h-[38px] mt-4 md:mt-0 flex items-center p-1 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none'>
        <label htmlFor='itemsPerPage' className='block text-xs md:text-sm font-medium text-gray-700 px-1'>
          Page Size
        </label>
        <select
          id='itemsPerPage'
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))} // Ensure to parse to number
          className='w-full h-8 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer text-sm md:text-base'
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value='200'>200</option>
          <option value='500'>500</option>
        </select>
      </div>
    </div>
  );
};

export default TablePagination;
