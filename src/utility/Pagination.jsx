import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate'
function Pagination() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Number of items to display per page
    const totalPages = 500 / itemsPerPage;  
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };
    const renderData = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        // Replace this with your actual data source
        const data = Array.from({ length: 500 }, (_, i) => i + 1);
    
        return data.slice(startIndex, endIndex).map((item) => (
          <div key={item} className="my-2">
            {/* Render your item here */}
            {item}
          </div>
        ));
      };
    
    return (
        <div>
            <div className="grid gap-4"></div>

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName="flex justify-center mt-4"
                activeClassName="text-blue-500 font-bold"
                pageClassName="cursor-pointer mx-2"
                previousClassName="cursor-pointer mx-2"
                nextClassName="cursor-pointer mx-2"
                breakClassName="mx-2"
            />
        </div>
    )
}

export default Pagination
