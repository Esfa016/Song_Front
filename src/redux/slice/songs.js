import { createSlice } from "@reduxjs/toolkit";



const songs = createSlice({
    name:'song',
    initialState:{
        id:"",
         title:"",
         artist:"",
         album:"",
         genre:""

    },
    reducers:{
        getSongsSlice:(state,action)=>{
        
            return state;
        },
        addSongsSlice:(state,action)=>{
            state.push(action.payload)
            return state;
        },
        editSongsSlice:(state,action)=>{
           state = state.map(i=>i.id==action.payload?action.payload:i)
            return state;
        } ,
        deleteSongsSlice:(state,action)=>{
          state =  state.filter(i=>i.id!==action.payload)
            return state;
        }
    }
})
export const {getSongsSlice,addSongsSlice,editSongsSlice,deleteSongsSlice} = songs.actions
export default songs.reducer