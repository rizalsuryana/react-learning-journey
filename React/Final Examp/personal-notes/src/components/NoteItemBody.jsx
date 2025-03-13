import React from "react";
import { showFormattedDate } from "../utils";

const NoteItemBody = ({notes}) => {
    return(
        <div className="note-item__content">
            <h2 className="note-item__title">{notes.title}</h2>
            <p className="note-item__date">{showFormattedDate(notes.createdAt)}</p>
            <p className="note-item__body">{notes.body}</p>
        </div>
    )
}

export default NoteItemBody;