import React from 'react'
import './App.css';
import Navbar from './Components/Header/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Popular from './Components/Pages/Popular';
import Footer from './Components/Footer'
import NewReleases from './Components/Pages/NewReleases'
import Dramas from './Components/Pages/Dramas'
import MovieLink from './Components/Movie/MovieLink'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Popular' exact component={Popular} />
          <Route path='/NewReleases' component={NewReleases} />
          <Route path='/Dramas' component={Dramas} />
          <Route path='/MovieLink' component={MovieLink} />
        </Switch>
        <Popular/>
        <NewReleases/>
        <Dramas />
        <MovieLink />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
