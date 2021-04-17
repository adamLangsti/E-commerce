import React from 'react';
import Navbar from './components/Navbar';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Router>
    );
};

export default App;
