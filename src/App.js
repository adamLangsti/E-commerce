import React from 'react';
import Navbar from './components/Navbar';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Categories from './components/categories/Categories';
import Footer from './components/Footer';
import Laptops from './components/categories/Laptops';
import Apple from './components/categories/Apple';

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/categories' component={Categories} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/laptops' component={Laptops} />
                <Route path='/apple' component={Apple} />
                {/* <Footer /> */}
            </div>
        </Router>
    );
};

export default App;
