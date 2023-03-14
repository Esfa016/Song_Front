import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as types from '../redux/types/index';


import styled from '@emotion/styled';
const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 15px;
  border-radius: 4px;
  max-width: 600px;
  margin: auto;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input[type="text"],
  select {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  button[type="submit"] {
    background-color: #008CBA;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #006C9B;
  }
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

 const handleSubmit = (event)=>{
  event.preventDefault();
    dispatch({type:types.UPDATE_SONG, id:id, song:{
      "title":formState.title,
      "artist":formState.artist,
      "album":formState.album,
      "genre":formState.genre,
      "_id":id
  }})
  }

  

  return (
    <StyledForm
    onSubmit={handleSubmit}
    >
  
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
      type='submit'
        onClick={
          
          ()=>handleSubmit()}
      >Update</button>
    </StyledForm>
  );
};

export default EditPage;
