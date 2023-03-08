import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import songs from '../redux/slice/songs';
import * as types from '../redux/types/index';
import { css } from '@emotion/react';

// Form styles
const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Input styles
const inputStyles = css`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3d63ff;
    box-shadow: 0px 0px 5px rgba(61, 99, 255, 0.3);
  }
`;

// Button styles
const buttonStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #3d63ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #2f4ab3;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(61, 99, 255, 0.3);
  }
`;

// Error message styles
const errorStyles = css`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

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
//   useEffect(() => {
//     setFormState({
//       pop: pop,
//       genre: genre,
//       album: album,
//       artist: artist,
//       title: title
//     });
//   }, []);

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
