import React, {Fragment} from "react";
import {connect} from "react-redux";

import SongItem from "./SongItem";
import SongDetails from "./SongDetails";
import {songSelect} from "../actions";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [
                {title: "Firs", length: 1}, {title: "Second", length: 2}, {title: "Third", length: 3}, {
                    title: "Fourth",
                    length: 4
                }
            ],
        }
    }

    render() {
        // console.log(this.state); // {songs: Array(4)}
        // console.log(this.props); // {selectedSong: null, songSelect: ƒ}
        const {songs} = this.state;

        return (
            <Fragment>
                <div className="left-box">
                    <h2>SONG LIST</h2>
                    <ul className="song-list">
                        {
                            songs.map(curSong => {
                                const {title} = curSong;
                                return <SongItem
                                    key={title}
                                    title={title}
                                    onCLick={() => this.props.songSelect(curSong)}
                                />
                            })
                        }
                    </ul>
                </div>
                <div className="right-box">
                    <SongDetails/>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state); // {selectedSong: null}
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps, {songSelect})(App);