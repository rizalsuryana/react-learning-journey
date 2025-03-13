import React from "react";
import NoteList from "./NoteList";
import AddNote from "./AddNote";


const NoteBody = ({onAddItem, activeNotes, archivedNotes, onDeleteItem, onArchived }) => {
    return (
        <div className="note-app__body">
            <AddNote onAddItem={onAddItem}/>
            <h2>Active Notes</h2>
            {
                activeNotes.length !== 0 ? <NoteList notes={activeNotes} onDeleteItem={onDeleteItem} onArchived={onArchived} /> : <p className="notes-list__empty-message">No Notes Found</p>
            }
            <h2>Archived Notes</h2>
            {
                archivedNotes.length !==0 ? <NoteList notes={archivedNotes} onDeleteItem={onDeleteItem} onArchived={onArchived} /> : <p className="note-list__empty-message">No Notes in Archive</p>
            }
            
        </div>
    )
}

export default NoteBody;