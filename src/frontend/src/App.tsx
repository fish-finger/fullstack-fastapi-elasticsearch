import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/about" component={About}>
                </Route>
            </Router>
        );
    }

}