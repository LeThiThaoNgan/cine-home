import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NewReleases from '../Pages/NewReleases'
import movieDetail from './movieDetail'

function movieRoute() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/StartUp' exact component={movieDetail} />
          <Route path='/Emily-in-paris' component={movieDetail} />
          <Route path='/Queen-of-gambit' component={movieDetail} />
        </Switch>
        <NewReleases/>
      </Router>
    </div>
  );
}

export default movieRoute;
