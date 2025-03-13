import React from "react";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
                newTitle: '',
                newContent: '',
                titleLimitChar: 50
            };
    }

    newTitleHandler = (event) => {
        this.setState({
            newTitle: event.target.value.slice(0, this.state.titleLimitChar)
        });
    }

    newContentHandler = (event) => {
        this.setState({
            newContent: event.target.value
        });
    }

    submitNoteHandler = (event) => {
        event.preventDefault();
        
        const newNote = {
            id       : +new Date(), 
            title    : this.state.newTitle,
            body     : this.state.newContent,
            createdAt: new Date().toISOString(),
            archived : false
        };

        this.props.onAddItem(newNote);
        this.setState({
            newTitle: '',
            newContent: ''
        });
    }

    render() {
        return(.
            
        <div className="note-input">
            <h3>Add New Note</h3>
            <form onSubmit={this.submitNoteHandler}>
                    <p className="note-input__title__char-limit">{this.state.titleLimitChar - this.state.newTitle.length}</p>
                    
                    <input type="text" className="note-input__title" placeholder="Please enter Title"
                    required value={this.state.newTitle} onChange={this.newTitleHandler} />

                    <textarea type="text" className="note-input__body" placeholder="Please write the content"
                    required value={this.state.newContent} onChange={this.newContentHandler}></textarea>

                    <button type="submit">Add Note</button>
            </form>
        </div>

        );
    }
}


export default AddNote;