import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Table from 'react-bootstrap/Table'

const TableComponent = ({ columns, sortColumn, onSort, data }) => {
  return (
    <Table hover responsive>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </Table>
  );
};

export default TableComponent;
