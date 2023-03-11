import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as types from '../redux/types/index';






const EditPage = ({ }) => {
    const dispatch = useDispatch()

    const {id} = useParams();
  const [formState, setFormState] = useState({
    
    genre:"",
    album:"",
    artist:"",
    title:""
  });
  console.log(id);

  const Songs = useSelector((state)=> state.songs)
  console.log(Songs);   

useEffect(()=>{
    const singleSong = Songs && Songs.find((f)=> f._id ==id)
       if(singleSong){
        setFormState({
          genre:singleSong.genre,
          album:singleSong.album,
          artist:singleSong.artist,
          title:singleSong.title
        })
       }
},[Songs])


  console.log(Songs)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`/api/songs/${id}`, formState);
      console.log('Song updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form 
    
    
    
    onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          name="genre"
          value={formState.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label  htmlFor="album">Album:</label>
        <input
           type="text"
          name="album"
          value={formState.album}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          name="artist"
          value={formState.artist}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={()=>dispatch({type:types.UPDATE_SONG, id:id, song:{
            "title":formState.title,
            "artist":formState.artist,
            "album":formState.album,
            "genre":formState.genre,
            "_id":id
        }})}
      type="submit">Update</button>
    </form>
  );
};

export default EditPage;
