import { Input, Button, Select,MenuItem } from "@mui/material"
import SongsTable from "./table"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongSlice } from "../redux/slice/song"
import { addSongsSlice, editSongsSlice } from "../redux/slice/songs"
import { nanoid } from "@reduxjs/toolkit"
import * as types from "../redux/types/index"



const MyForm = ()=>{
  const [selectedValue, setSelectedValue] = useState('S');

  function handleDropdownChange(event) {
    
    setSelectedValue(event.target.value);
    handleChange('genre')
  }
    const dispatch = useDispatch()
    const handleChange=(prop)=>(event)=>{
       dispatch( setSongSlice({...song,[prop]:event.target.value}))
    }
      const song= useSelector(state => state.song)
    const hanleSubmit = ()=>{
      alert(song._id)
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
          dispatch(setSongSlice({
              _id:"",
              title:"",
              album:"",
              artist:"",
              genre:""
          
          })) 
    }
   return <>
     <Input  onChange={handleChange('title')} placeholder="title" value={song.title} fullWidth/>
     <Input  onChange={handleChange('artist')} placeholder="artist"  value={song.artist} fullWidth/>
     <Input  onChange={handleChange('album')} placeholder="album" value={song.album} fullWidth/>
     {/* <Select
     title="Select Genre"
     fullWidth
          labelId="dropdown-label"
          id="dropdown"
          label="Select Genre"
          value={song.genre}
          placeholder="Rock"
          onChange={handleDropdownChange}
          
        >
           <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
          
        </Select> */}
     <Input  onChange={handleChange('genre')} placeholder="genre" value={song.genre} fullWidth/>
     <Button onClick={()=>{hanleSubmit()}} fullWidth variant="contained">Submit</Button>
   </>
}
export default MyForm