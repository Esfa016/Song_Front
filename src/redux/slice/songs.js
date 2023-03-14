import { createSlice } from "@reduxjs/toolkit";



const songs = createSlice({
    name:'songs',
    initialState:[{
        _id:"",
         title:"",
         artist:"",
         album:"",
         genre:"",
         isLoaded:false
         
    

    }],
    reducers:{
        getSongsSlice:(state,action)=>{
            
            state = action.payload
            
              state.isLoaded = true
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
          state.isLoaded = true
            return state;
        }
    }
})
export const {getSongsSlice,addSongsSlice,editSongsSlice,deleteSongsSlice} = songs.actions
export default songs.reducer