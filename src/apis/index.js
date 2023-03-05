import axios  from "axios";

axios.defaults.baseURL = "https://addis-softaware-songs-backend.onrender.com/"
export const getSongs = async()=> axios.get("/songs")
export const addSongs =  async(song)=> axios.post("/songs", song)
export const deleteSong = async(id)=> axios.delete("/songs",{
    params:{
        id:id
    }
} )
export const updateSong =  async(song, id) => axios.put("/songs",song,{
    params:{
        id:id
    }
})