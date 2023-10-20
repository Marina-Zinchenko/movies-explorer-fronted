import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Header1 from '../Header/Header1';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from "../MoviesCard/MoviesCard"

function App() {
  return (
    <BrowserRouter>
    <Header1/>
    <Header/>
    <SearchForm/>
    <MoviesCard/>
    <Main/>
    <Routes>
        <Route path='*' component={<PageNotFound />} />
        <Route path="/" component={<Main/>} />
        <Route path="/signup" component={<Register />} />
    </Routes>
    <Footer/>
    </BrowserRouter>

/*

 

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
       </Routes>
       </div>
     */

  );
}

export default App;
