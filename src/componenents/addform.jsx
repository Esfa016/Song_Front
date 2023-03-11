import { Input, Button, Select,MenuItem } from "@mui/material"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongSlice } from "../redux/slice/song"

import * as types from "../redux/types/index"
import styled from '@emotion/styled';
const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  margin:15px;
  border-radius: 4px;
   
  
  
`;



const MyForm = ()=>{
  
    const dispatch = useDispatch()
    const handleChange=(prop)=>(event)=>{
      
       dispatch( setSongSlice({...song,[prop]:event.target.value}))
    }
      const song= useSelector(state => state.song)
    const hanleSubmit = ()=>{
      alert(song.album)
          song._id===""? dispatch({type:types.CREATE_SONG,song:{
            "title":song.title,
            "artist":song.artist,
            "album":song.album,
            "genre":song.genre
          }}): dispatch({type:types.UPDATE_SONG, id:song._id, song:{
            "_id":song._id,
            "title":song.title,
            "artist":song.artist,
            "album":song.album,
            "genre":song.genre
          }
          
          })
         dispatch({type:types.GET_SONGS})
    }
   return <>
   <StyledForm>
     <Input  onChange={handleChange('title')} placeholder="title" value={song.title} fullWidth/>
     <Input  onChange={handleChange('artist')} placeholder="artist"  value={song.artist} fullWidth/>
     <Input  onChange={handleChange('album')} placeholder="album" value={song.album} fullWidth/>
    
     <Input  onChange={handleChange('genre')} placeholder="genre" value={song.genre} fullWidth/>
     <Button
    
     onClick={()=>{hanleSubmit()}} fullWidth variant="contained">Submit</Button>
     </StyledForm>
   </>
}
export default MyForm