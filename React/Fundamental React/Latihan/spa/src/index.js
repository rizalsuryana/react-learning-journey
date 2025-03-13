import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


const HomePage = () =>{
  return <p>This is home page</p>
}

const AboutPage = () => {
  return<p>This is About page</p>
}

const FaqPage =() => {
  return <p>This is paq page</p>
}







// kabaheulaan


// Link untuk pindah page spa

const Link = ({target, navigate, children}) => {
  return (
    <a
    href={target}
    onClick={(event)=> {
      event.preventDefault(); //menghapus behavior default
      navigate(target); //mengubah state berdasarkan target
    }}
    >
      {children}


    </a>
  );

}





class App extends React.Component {

  constructor(pros) {
    super(pros);

    this.state={
      page: '/'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(()=> {
      return{
        page: target
      };
    });
  }





  render() {

    // if (this.state.page==='/') {
    //   return <HomePage/>;
    // }
    // if (this.state.page==='/about') {
    //   return <AboutPage/>;
    // }
    // if (this.state.page==='/faq') {
    //   return <FaqPage/>;
    // }
    return(
      <>
      <header>
        <nav>
          <ul>
            <li>
              <Link target='/' navigate={this.navigate}>
              Home
              </Link>
            </li>
            <li>
              <Link target='/about' navigate={this.navigate}>
              About
              </Link>
            </li>
            <li>
              <Link target='/faq' navigate={this.navigate}>
              Faq
              </Link>
            </li>
          </ul>
        </nav>

      </header>

      <main>
      {this.state.page === '/' && <HomePage/>}
      {this.state.page === '/about' && <AboutPage/>}
      {this.state.page === '/faq' && <FaqPage/>}
      </main>
      </>
    )
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);