import { Input, Button } from "@mui/material"
import SongsTable from "./table"
import { useState } from "react"


const MyForm = ()=>{
     const [song,setSong] = useState({
        title:"",
        album:"",
        artist:"",
        genre:""
    })
    const handleChange=(prop)=>(event)=>{
        setSong({...song,[prop]:event.target.value})
    }
   return <>
     <Input  onChange={handleChange('title')} placeholder="title" value={song.title} fullWidth/>
     <Input  onChange={handleChange('artist')} placeholder="artist"  value={song.artist} fullWidth/>
     <Input  onChange={handleChange('album')} placeholder="album" value={song.album} fullWidth/>
     <Input  onChange={handleChange('genre')} placeholder="genre" value={song.genre} fullWidth/>
     <Button onClick={()=>{console.log(song)}} fullWidth variant="contained">Submit</Button>
   </>
}
export default MyForm