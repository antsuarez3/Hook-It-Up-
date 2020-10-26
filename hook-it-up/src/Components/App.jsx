import React, { Fragment } from 'react'
import Films from './Films';
import FilmDetails from './FilmDetails.jsx'
import GhibliLogo from '../assets/logo.png'


import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <img src={GhibliLogo} alt="Studio Ghibli Logo" className="border border-danger shadow" />
                <Router>
                    <Link to="/films">
                        <button className="mx-4 text-primary btn btn-outline-dark btn-sm">
                            <p>Films</p>
                        </button>
                    </Link>

                    <Switch>
                        <Route exact path="/films" component={Films} />
                        <Route path="/films/:id" component={FilmDetails} />
                    </Switch>
                </Router>
        </Fragment>
    )
}

export default App;