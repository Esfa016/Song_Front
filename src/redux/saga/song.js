import * as api from "../../apis/index";
import * as types from "../types/index";
import * as slice from "../slice/songs";
import * as statSlice from "../slice/stats"
import {put,take, takeEvery} from "redux-saga/effects";
export function* getSongsSaga(){
    const songs = yield api.getSongs();
    console.log(songs.data.data)
    yield put(slice.getSongsSlice(songs.data.data))
}
export function* createSongSaga(action){
    try{
  const resp =  yield api.addSongs(action.song)
  console.log(resp);
    yield put(slice.addSongsSlice(action.song))
    }
    catch(e){
        if(e.response){
            alert(e.response.data)
        }
        else{
            alert('error while saving song')
        }
    }
}

export function* updateSongSaga(action){
    const song = {
        title:action.song.title,
        album:action.song.album,
        artist:action.song.artist,
        genre:action.song.genre
    }
  const resp =  yield api.updateSong(song,action.id)
    yield put(slice.editSongsSlice(action.song))
}
export function* deleteSongSaga(action){
 
    yield api.deleteSong(action.id);
    yield put(slice.deleteSongsSlice(action.id))
}

export function* getStats(){
    const stats = yield api.getStats()
    console.log(stats.data.numberOfSongs);
    yield put(statSlice.setStatSlice(stats.data))
}


export function* watchSongsAsync(){
    yield takeEvery(types.GET_SONGS,getSongsSaga)
    yield takeEvery(types.CREATE_SONG,createSongSaga)
    yield takeEvery(types.UPDATE_SONG,updateSongSaga)
    yield takeEvery(types.DELETE_SONG,deleteSongSaga)
    yield takeEvery(types.GET_STATS,getStats)
}
