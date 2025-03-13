import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteActionItem from "./NoteActionItem";

const NoteItem = ({notes, onDeleteItem, onArchived}) => {
    return(
        <div className="note-item">
            <NoteItemBody notes={notes} />
            <NoteActionItem notes={notes} onDeleteItem={onDeleteItem} onArchived={onArchived} />
        </div>
    );
}

export default NoteItem;