// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// import React from 'react';
// import { createRoot } from 'react-dom/client';

// class MyComponent extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>;
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<div>
//   <MyComponent name='Rizal Suryana'/>
//   <MyComponent name='Depok'/>
// </div>);



import React from "react";
import { createRoot } from "react-dom/client";


const CounterDisplay = ({ count }) =>{

  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0){
    return <p>FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }


  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }







  
  return <p>{count}</p>;
}

const IncreaseButton = ({ increase }) => {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

const ResetButton = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}





class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // isilah nilai count di dalam state

    this.state = {
      count : 0
    };
      // Binding event handler
  this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
  this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }


  onIncreaseEventHandler () {
    this.setState((previousState) => {
      return {
        count: previousState.count +1
      };
    });
  }

  onResetEventHandler () {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }







  render() {
    return (
      <div>
        <p>TODO : Selesaikan komponent-nya</p>

        <IncreaseButton increase={this.onIncreaseEventHandler}/>
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}


const root = createRoot(document.querySelector('#root'));
root.render(<CounterApp/>);