import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/movie/:imdbID'>
              <Details />
            </Route>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
