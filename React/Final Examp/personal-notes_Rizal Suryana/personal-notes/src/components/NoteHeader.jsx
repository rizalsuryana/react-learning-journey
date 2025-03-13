import React from "react";

const NoteHeader = ({search, onSearchItem}) => {
    return (
        <div className="note-app__header">
            <h1>Personal Note App</h1>
            <div className="note-search">
                <input type="search" placeholder="Search Notes.." 
                value={search} 
                onChange={onSearchItem}/>

            </div>

        </div>
    )
}

export default NoteHeader;