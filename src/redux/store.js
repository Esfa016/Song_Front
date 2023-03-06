import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import song from './slice/song';
import songs from './slice/songs' 
import stats from "./slice/stats";
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from "./saga";
const sagaMiddleware =createSagaMiddleware()

const store = configureStore({
    reducer:{
        song,
        songs,
        stats
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
    
})
sagaMiddleware.run(rootSaga)
export default store