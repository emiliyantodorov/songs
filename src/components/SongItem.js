import React from "react";

const SongItem = ({title, onCLick})=> (
    <li className="song-list__item">
        <span>{title.toUpperCase()}</span>
        <button onClick={onCLick}>Click</button>
    </li>
)

export default SongItem;