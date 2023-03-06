import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import * as types from "../redux/types/index";
import * as slice from "../redux/slice/song"

export default function SongsTable() {
  const rows = useSelector(state=>state.songs)
const dispatch = useDispatch();
React.useEffect(()=>{dispatch({type:types.GET_SONGS})},[])
   

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell align="right">Title</TableCell>
            <TableCell align="right">Album</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.title}
              </TableCell> */}
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.album}</TableCell>
              <TableCell align="right">{row.artist}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <TableCell align="right">
              <Button onClick={()=>dispatch(slice.setSongSlice(row))}  variant="contained">Edit</Button>
        
              </TableCell>
              <TableCell align="right">
              <Button 
               onClick={()=> dispatch({type: types.DELETE_SONG, id: row._id}) }
              variant="contained">Delete</Button>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}