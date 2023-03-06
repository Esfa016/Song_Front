import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as types from "../redux/types/index";
import { useDispatch, useSelector } from 'react-redux';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
    const data = useSelector(state=>state.stats)
    console.log('.................')
    console.log(data)
  
    const dispatch = useDispatch();
    React.useEffect(()=>{dispatch({type:types.GET_STATS})},[])
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <h5>Total number of songs =  {data.numberOfSongs}   </h5>
      <h5>Total number of artists = {data.totalArtist[0]['totalArtists']}</h5>
      <h5>Total number of albums = {data.totalAlbums[0]['totalAlubms']}</h5>
      <h5>Total number of Genre = {data.totalGenre[0]['totalGenre']}</h5>
      <h5>Total number of songs</h5>
      <h5>Total number of songs</h5>


      </CardContent>
      
    </Card>
  );
}