// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



/**
 * Latihan membuat controller component
 */

import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state

    this.state = {
      name  : '',
      email : '',
      gender: ''
    };

    // binding this content to event handler

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(()=> {
      return{
        name: event.target.value
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(()=> {
      return {
        email: event.target.value
      };
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState(()=>{
      return{
        gender : event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
    Name  : ${this.state.name}
    Email : ${this.state.email}
    Gender: ${this.state.gender}
    `

    alert(message);
  }



  // Rendering / menampilkan
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name  :</label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
          <br />
          <label htmlFor="email">Email  :</label>
          <input type="text" id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
          <br />
          <label htmlFor="gender">Gender  :</label>
          <select name="gender" id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
            <option value="">Select</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            </select>
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<MyForm/>);