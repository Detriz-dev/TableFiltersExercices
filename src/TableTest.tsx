
export default function TableComponent(dataSet, columnName1, columnName2, columnName3) {
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