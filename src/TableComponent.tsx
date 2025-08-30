
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CompaniesData from "./CompaniesData.tsx"

export interface TableComponentProps {
  dataSet: []
  columnName1: string;
  columnName2: string;
  columnName3: string;
}


export const TableComponent: React.FC<TableComponentProps> = ({dataSet, columnName1, columnName2, columnName3}) => {
  return (
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="companies table">
    <TableHead>
      <TableRow>
        <TableCell>Provider</TableCell>
        <TableCell align="right">Region</TableCell>
        <TableCell align="right">Type</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dataSet.map((company, index) => (
        <TableRow
          key={index} // Using index since there's no unique identifier
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {company[columnName1]}
          </TableCell>
          <TableCell align="right">{company[columnName2]}</TableCell>
          <TableCell align="right">{company[columnName3]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  );
}
