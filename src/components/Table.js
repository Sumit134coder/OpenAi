import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect } from 'react';

function ShowPaginationButton({
  pageIndex, index, pageCount, gotoPage,
}) {
  function Element() {
    return (
      <button
        onClick={() => gotoPage(index)}
        className={`${index === pageIndex ? '' : 'text-gray-500'} hover:bg-gray-50 relative inline-flex items-center px-4 py-2`}
      >
        {index + 1}
      </button>
    );
  }

  function Extra() {
    return (
      <button disabled className="text-gray-500 relative inline-flex items-center px-4 py-2">
        ...
      </button>
    );
  }

  if (pageCount < 6) return <Element />;

  if (index === 0 || index === 1 || index === pageCount - 1) {
    return (
      <>
        <Element />
        { index === 1 && (pageIndex < 2 || pageIndex > pageCount - 2) && pageCount > 3
          ? <Extra />
          : null}
      </>
    );
  }

  if (index === pageIndex) {
    return (
      <>
        {index !== 2 && index - 1 !== 1 ? <Extra /> : null}
        <Element />
        {index !== pageCount - 2 && index + 1 !== pageCount - 1 ? <Extra /> : null}
      </>
    );
  }

  return null;
}

function Table({
  columns, data, pageSize, className, filter,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable({ columns, data, initialState: { pageSize } }, useGlobalFilter, usePagination);

  useEffect(() => setGlobalFilter(filter), [filter]);

  return (
    <>
      <div className={`${className} overflow-x-auto`}>
        <table {...getTableProps()} className="min-w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    scope="col"
                    className="px-6 py-5 text-left text-sm font-medium tracking-wider"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-light-400">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-6 py-5 whitespace-nowrap text-sm">{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse md:flex-row items-center md:justify-between mt-4">
        <div className={`${className} hidden md:block px-4 py-3 text-sm text-gray-500`}>
          {`Showing : ${pageCount === 1 ? data.length : pageSize} Items out of ${pageCount === 1 ? data.length : pageSize * pageCount} Result(s)`}
        </div>
        <nav className={`${className} relative z-0 inline-flex -space-x-px`}>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md font-medium ${canPreviousPage ? 'text-gray-500' : 'text-gray-300'} hover:bg-gray-50`}
          >
            <span className="sr-only">Previous</span>
            <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {pageOptions.map((index) => (
            <ShowPaginationButton
              key={index}
              index={index}
              pageIndex={pageIndex}
              pageCount={pageCount}
              gotoPage={gotoPage}
            />
          ))}
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md font-medium ${canNextPage ? 'text-gray-500' : 'text-gray-300'} hover:bg-gray-50`}
          >
            <span className="sr-only">Next</span>
            <HiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </>
  );
}

export default Table;
