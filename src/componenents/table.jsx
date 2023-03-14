import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import * as types from "../redux/types/index";

import styled from '@emotion/styled';


import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
export default function SongsTable() {

  const StyledButton = styled.button`

  
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color: #003b80;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
  }
`;
  const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  font-size: 16px
`;
  const StyledTable = styled(Table)`
  min-width: 650px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

const navigation = useNavigate()

  const rows = useSelector(state=>state.songs)

const dispatch = useDispatch();
React.useEffect(()=>{dispatch({type:types.GET_SONGS})},[])
const handleEditClick = (id) => {
  navigation(`/edit/${id}`)
};


console.log(rows.isLoading)


  return (
   
rows.isLoading? 
  
    
  <>   
  
  
   <StyledTable>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Album</StyledTableCell>
            <StyledTableCell align="right">Artist</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          
          {rows.map((row) => (
            
            <StyledTableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.title}
              </TableCell> */}
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.album}</StyledTableCell>
              <StyledTableCell align="right">{row.artist}</StyledTableCell>
              <StyledTableCell align="right">{row.genre}</StyledTableCell>
              <StyledTableCell align="right">
              <StyledButton onClick={()=> handleEditClick(row._id) } variant="contained">Edit</StyledButton>
        
              </StyledTableCell>
              <TableCell align="right">
              <StyledButton 
               
               onClick={()=> dispatch({type: types.DELETE_SONG, id: row._id}) }
              >Delete</StyledButton>
              </TableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </StyledTable>
    </>
    :<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ReactLoading type={'spin'} color={'blue'} height={50} width={50} />
  </div>
   
  );
}