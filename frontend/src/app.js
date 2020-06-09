import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Tracking from './components/Tracking.js'
import './css/style.scss';
const {useState, useEffect} = React

const App = (props) => {

    const [body, setBody] = useState('Home')

    const content = () =>{
        if(body === 'Home'){
            return <Home />
        } else if(body === 'Tracking'){
            return <Tracking />
        }
    }

    return (
        <div className="app">
            <Header setBody={setBody}/>
            {content()}
            <Footer />
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
