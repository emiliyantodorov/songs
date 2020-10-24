import {combineReducers} from "redux";

const songSelectedReducer = (selectedSong = null, action) => {
    const {type, payload} = action;

    if (type === "SONG_SELECTED") return payload;

    return selectedSong;
}

export default combineReducers({
    selectedSong: songSelectedReducer
})


