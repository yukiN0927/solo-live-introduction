import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PropTypes from 'prop-types';

function SeachTable(props){
    const { tableValue }=props;
    return (
        <TableContainer>
            <Table aria-label="test">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left">名前</TableCell>
                        <TableCell align="left">性別</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {tableValue.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell align="left"><img src={row.image} alt="プロフ画像" style={{maxHeight:"100px"}} /></TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.gender}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

SeachTable.propTypes = {
    tableValue: PropTypes.array.isRequired,
};

export default SeachTable