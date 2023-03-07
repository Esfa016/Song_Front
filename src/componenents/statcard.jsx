import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as types from "../redux/types/index";
import { useDispatch, useSelector } from 'react-redux';
import { jsx, css } from "@emotion/react";
import Card2 from './Card';

const cardStyles = css`
  background-color: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const headerStyles = css`
  padding: 16px;
  background-color: #f4f4f4;
  font-size: 1.25rem;
  font-weight: bold;
`;

const contentStyles = css`
  padding: 16px;
  font-size: 1rem;
`;

export default function BasicCard() {
  const data = useSelector(state=>state.stats);
  const dispatch = useDispatch();
  React.useEffect(()=>{dispatch({type:types.GET_STATS})},[])

  return (

      data.isLoading ? <h1>Waiting</h1> :
        <>
          <Card
            css={cardStyles}
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography css={headerStyles}>Total number of songs</Typography>
              <Typography css={contentStyles}>
                {data.numberOfSongs}
              </Typography>
            </CardContent>
          </Card>

          <Card
            css={cardStyles}
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography css={headerStyles}>Total number of artists</Typography>
              <Typography css={contentStyles}>
                {data.totalArtist[0]['totalArtists']}
              </Typography>
            </CardContent>
          </Card>

          <Card
            css={cardStyles}
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography css={headerStyles}>Total number of albums</Typography>
              <Typography css={contentStyles}>
                {data.totalAlbums[0]['totalAlbums']}
              </Typography>
            </CardContent>
          </Card>

          <Card
            css={cardStyles}
            sx={{ minWidth: 275, m: 2, flexGrow: 1 }}
          >
            <CardContent>
              <Typography css={headerStyles}>Total number of genres</Typography>
              <Typography css={contentStyles}>
                {data.totalGenre[0]['totalGenre']}
              </Typography>
            </CardContent>
          
          </Card>
        
           
           {data.totalSongsInGenre.map((genreSongs,index)=>{
            {console.log(genreSongs['songs'])}
            <Card
            >
              <CardContent>
              <Typography css={headerStyles}>Total number of songs</Typography>
              </CardContent>
             
            </Card>
            
          })} 
          
        </>
        
      

  );
}
