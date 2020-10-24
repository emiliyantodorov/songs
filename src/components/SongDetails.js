import React, {Fragment} from "react";

import {connect} from "react-redux";

const SongDetails = ({selectedSong}) => {

    return (
        <div className="song-details">
            {
                selectedSong ?
                    <Fragment>
                        <h3>Title: {selectedSong.title}</h3>
                        <span>length: {selectedSong.length}</span>
                    </Fragment> :
                    <span>Select a song</span>
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);