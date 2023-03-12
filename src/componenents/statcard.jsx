import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as types from "../redux/types/index";
import { useDispatch, useSelector } from 'react-redux';
import { jsx, css } from "@emotion/react";
import Card2 from './Card';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SongsInGenre from './songsInGenre';
import styled from '@emotion/styled';

const StyledCard = styled.div`
background-color: #ffffff;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
border-radius: 8px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
text-align: center;
`;


export default function BasicCard() {
  const data = useSelector(state=>state.stats);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  React.useEffect(()=>{dispatch({type:types.GET_STATS})},[])
  const handleSeeMore = (totalSongsInGenre) =>{
    //console.log(totalSongsInGenre);
    
  navigation('/songsInGenre', {state:{totalSongsInGenre:totalSongsInGenre}})
   
  }
  return (

      data.isLoading ? <h1>Waiting...</h1> :
        <>
        <div>
          <StyledCard
        
          
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography>Total number of songs</Typography>
              <Typography >
                {data.numberOfSongs}
              </Typography>
            </CardContent>
          </StyledCard>

          <StyledCard
     
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography>Total number of artists</Typography>
              <Typography>
                {data.totalArtist[0]['totalArtists']}
              </Typography>
            </CardContent>
          </StyledCard>

          <StyledCard
           
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography >Total number of albums</Typography>
              <Typography>
                {data.totalAlbums[0]['totalAlubms']}
              </Typography>
            </CardContent>
          </StyledCard>

          <StyledCard
           
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography >Total number of genres</Typography>
              <Typography >
                {data.totalGenre[0]['totalGenre']}
              </Typography>
            </CardContent>
          
          </StyledCard>
          <Button  onClick={()=>{handleSeeMore( data.totalSongsInGenre )}} >See more</Button>
        
{/*            
           {data.totalSongsInGenre.map((genreSongs,index)=>{
            {console.log(genreSongs['songs'])}
            <Card
            >
              <CardContent>
              <Typography css={headerStyles}>Total number of songs</Typography>
              </CardContent>
             
            </Card>
            
          })}  */}
          </div>
        </>
        
      

  );
}
