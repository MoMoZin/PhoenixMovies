import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

function Table(props) {
    const { data, columns, sortColumn, onSort } = props;
    return (
        <table className='table'>
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>   
    );
}

export default Table;