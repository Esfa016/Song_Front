import { configureStore } from "@reduxjs/toolkit";
import song from './slice/song';
import songs from './slice/songs' 

const store = configureStore({
    reducer:{
        song,
        songs
    }
})
export default store