import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils";


class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            notes: getInitialData(),
            search: '',
        };

        this.addItemHandler = this.addItemHandler.bind(this);
        this.deleteItemHandler = this.deleteItemHandler.bind(this);
        this.searchItemHandler = this.searchItemHandler.bind(this);
        this.archivedItemHandler = this.archivedItemHandler.bind(this);
    }

    addItemHandler(note) {
        this.setState((prevState) => ({
            notes: [...prevState.notes, note]
        }));
    }

    deleteItemHandler(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id)
        }));
    }

    searchItemHandler(event) {
        this.setState({ search: event.target.value.toLowerCase() });
    }

    archivedItemHandler(id) {
        this.setState((prevState) =>({
            notes: prevState.notes.map((note) => note.id === id? {...note, archived : !note.archived} : note)
        }));
    }

    render(){
        const filteredNotes = this.state.notes.filter((note) => 
        note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note)=> note.archived);




        return (
            <div>
            <NoteHeader search={this.state.search} onSearchItem={this.searchItemHandler}/>
            <NoteBody
            notes={this.state.notes}
            onAddItem={this.addItemHandler}
            onDeleteItem={this.deleteItemHandler}
            onArchived={this.archivedItemHandler}
            activeNotes={activeNotes}
            archivedNotes={archivedNotes}
            />

            </div>
        );
    }
}

export default PersonalNoteApp;