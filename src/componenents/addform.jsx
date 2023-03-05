import { Input, Button, Select,MenuItem } from "@mui/material"
import SongsTable from "./table"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongSlice } from "../redux/slice/song"
import { addSongsSlice, editSongsSlice } from "../redux/slice/songs"
import { nanoid } from "@reduxjs/toolkit"




const MyForm = ()=>{
  const [selectedValue, setSelectedValue] = useState('S');

  function handleDropdownChange(event) {
    handleChange(selectedValue)
    setSelectedValue(event.target.value);
  }
    const dispatch = useDispatch()
    const handleChange=(prop)=>(event)=>{
       dispatch( setSongSlice({...song,[prop]:event.target.value}))
    }
      const song= useSelector(state => state.song)
    const hanleSubmit = ()=>{
          song.id===0? dispatch(addSongsSlice({...song, id:nanoid(8)  })): dispatch(editSongsSlice(song))
          dispatch(setSongSlice({
               id:0,
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
     <Select
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
          
        </Select>
     {/* <Input  onChange={handleChange('genre')} placeholder="genre" value={song.genre} fullWidth/> */}
     <Button onClick={()=>{hanleSubmit()}} fullWidth variant="contained">Submit</Button>
   </>
}
export default MyForm