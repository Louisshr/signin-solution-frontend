import React from "react";
import { TablePagination } from "@mui/material";
import '../style.css';

// vi bruker array.slice for å mappe fra en index til en annen index

export default function PaginationSite(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [aNumber, setANumber] = React.useState(page + 1);

    const handleChangePage = (event, newPage) => {
        setANumber(newPage + 1);        
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }

    return(
        <div>
            <h1>{aNumber}</h1>
            <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="tablePagination-style"
            variant="outlined"
            />
         </div>
    )
}