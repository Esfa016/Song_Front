import { createSlice } from "@reduxjs/toolkit";



const songs = createSlice({
    name:'songs',
    initialState:[{
        _id:"",
         title:"",
         artist:"",
         album:"",
         genre:""

    }],
    reducers:{
        getSongsSlice:(state,action)=>{
            state = action.payload
            return state;
        },
        addSongsSlice:(state,action)=>{
            state.push(action.payload)
            return state;
        },
        editSongsSlice:(state,action)=>{
            console.log(action.payload)
            //state = getSongsSlice(state,action)
           state = state.map(i=>i._id===action.payload._id?action.payload:i)
            return state;
        } ,
        deleteSongsSlice:(state,action)=>{
          state =  state.filter(i=>i._id!==action.payload)
            return state;
        }
    }
})
export const {getSongsSlice,addSongsSlice,editSongsSlice,deleteSongsSlice} = songs.actions
export default songs.reducer