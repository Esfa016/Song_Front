import { createSlice } from "@reduxjs/toolkit";
const stats = createSlice({
    name:'stats',
    initialState:{
        numberOfSongs:0,
        totlalArtists:0,
        totalAlbums:0,
        totalGenre:0
    },
    reducers:{
        setStatSlice(state,action){
            state = action.payload
            console.log('state here');
            console.log(state)
            return state;
        }
    }
})
export const {setStatSlice} = stats.actions;
export default stats.reducer;