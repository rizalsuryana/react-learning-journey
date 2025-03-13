import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';



const HomePage = ()=>{
  return <p> This is Home Page</p>;
}

const AboutPage = ()=>{
  return <p>This is About Page</p>;
}

const FaqPage = ()=>{
  return <p> Tis is Faq Page</p>
}

const App = ()=>{
  return (
    <>
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
      </ul>
    </header>


    <main>

      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>

      </Routes>

    </main>
    </>
  );
}

  
const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
