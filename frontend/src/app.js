import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Tracking from './components/Tracking.js'
import SignUp from './components/SignUp.js'
import SignIn from './components/SignIn.js'
import './css/style.scss';
const {useState, useEffect} = React

const App = (props) => {

    const [body, setBody] = useState('Home')

    const [formData, setFormData] = useState({
        tracking_number: '',
        carrier: ''
    });

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [myPackage, setMyPackage] = useState(null)

    const resetStates = ()=>{
        setFormData({
            tracking_number: '',
            carrier: ''
        });
        setUserData({
            username: '',
            password: ''
        });
        setMyPackage(null)
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value.toLowerCase()});
    };

    const handleUser = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

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

    let token;

    const checkForToken = () =>{
        if(window.localStorage.getItem('token')){
            return token = JSON.parse(window.localStorage.getItem('token'));
        } else{
            return null;
        }
    }

    const [tokenState, setTokenState] = useState(null)

    useEffect(()=>{
        setTokenState(checkForToken())
    }, [])

    const login = async () => {
        if(window.localStorage.getItem('token')) {
            console.log('token exists')
            token = JSON.parse(window.localStorage.getItem('token'))
        } else {
            const request = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {"Content-Type": "application/json"}
        })
        const newToken = await request.json()
        token = await newToken
        window.localStorage.setItem('token', JSON.stringify(token))}
        await setTokenState(token)
    }

    const signUp = async ()=>{
        console.log('running function')
        try{
            const request = await fetch('http://localhost:3000/signup', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {"Content-Type": "application/json"}
            })
            const response = await request.json()
            console.log(response)
        } catch(error){
            console.error(error)
        }
    }

    const logout = () => {
        token = '';
        window.localStorage.removeItem('token');
        setTokenState(token)
    }

    const content = () =>{
        if(body === 'Home'){
            return <Home 
            setBody={setBody} 
            handleTrack={handleTrack} 
            setFormData={setFormData} 
            handleChange={handleChange}
            />
        } else if(body === 'Tracking'){
            return <Tracking myPackage={myPackage} setBody={setBody} setFormData={setFormData}/>
        } else if(body === 'Sign Up'){
            return <SignUp setBody={setBody} handleUser={handleUser} signUp={signUp}/>
        } else if(body === 'Sign In'){
            return <SignIn setBody={setBody} handleUser={handleUser} signIn={login}/>
        }
    }
    return (
        <div className="app">
            <Header tokenState={tokenState} setBody={setBody} login={login} logout={logout} setFormData={setFormData} setMyPackage={setMyPackage} setUserData={setUserData} resetStates={resetStates}/> 
            {content()}
            <Footer />
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
