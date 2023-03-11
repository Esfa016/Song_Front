import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import { useLocation } from 'react-router-dom';

export default function SongsInGenre( props ) {
    const location = useLocation()
    const data = location.state.totalSongsInGenre;
    console.log(data)

  
  return (
   <div>
    {data.map(song=>(
          <Card
          
          sx={{ minWidth: 275 }}>
            <CardContent>
                <h5>total number of songs in {song.genre} = {song.songs}</h5>
            </CardContent>
          {/* <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total 
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
           </Card>
    ))}
   </div>

   
   
    
  );
}