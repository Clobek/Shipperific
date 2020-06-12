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

    const [formData, setFormData] = useState({
        tracking_number: '',
        carrier: '',
    });

    const [myPackage, setMyPackage] = useState(null)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value.toLowerCase()});
    };

    const handleTrack = async () =>{
        event.preventDefault();
        try{
            const request = await fetch(`http://localhost:3000/api/${formData.tracking_number}/${formData.carrier}`)
            const response = await request.json()
            await setMyPackage(response.items[0])
        } catch(error){
            console.error(error)
        }
    }

    // const handleTrack = () =>{
    //     fetch(`http://localhost:3000/api/${formData.tracking_number}/${formData.carrier}`, {
    //         mathod: 'GET',
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then((response)=> response.json())
    //     .then((foundPackage)=>{
    //         setMyPackage(foundPackage.items[0])
    //         console.log(foundPackage.items[0])
    //     })
    // }

    const content = () =>{
        if(body === 'Home'){
            return <Home 
            setBody={setBody} 
            handleTrack={handleTrack} 
            formData={setFormData} 
            handleChange={handleChange}
            />
        } else if(body === 'Tracking'){
            return <Tracking myPackage={myPackage}/>
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
