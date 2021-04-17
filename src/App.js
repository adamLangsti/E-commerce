import React from 'react';
import Navbar from './components/navbar';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/products' component={Products} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
        </Router>
    );
};

export default App;
