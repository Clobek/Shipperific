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
    //Sets the body in the application\\
    const [body, setBody] = useState('Home')

    //Sets form data for tracking a package\\
    const [formData, setFormData] = useState({
        tracking_number: '',
        carrier: ''
    });

    //Sets user data for both signing up and signing in\\
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    //Sets the package we get back from the API\\
    const [myPackage, setMyPackage] = useState(null)

    //Sets the theme/color of the page\\
    const [theme, setTheme] = useState('light')

    //Adds a transition effect to the theme/color change\\
    const transition = () =>{
        document.documentElement.classList.add('transition');
        window.setTimeout(()=>{
            document.documentElement.classList.remove('transition')
        }, 500);
    }

    //Changes the html theme based on whatever the theme state is\\
    useEffect(()=>{
        transition()
        document.documentElement.setAttribute('data-theme', theme);
    })

    //Resets a few states back to their initial state\\
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

    //Changes the form data state based on the input\\
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value.toLowerCase()});
    };

    //Changes the user data state based on the input\\
    const handleUser = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    //Fetches a package from the api and sets the data for it in a state\\
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

    //Variable for our token\\
    let token;

    //A function to see if the user has a token in local storage\\
    const checkForToken = () =>{
        if(window.localStorage.getItem('token')){
            return token = JSON.parse(window.localStorage.getItem('token'));
        } else{
            return null;
        }
    }

    //Sets a state for the token\\
    const [tokenState, setTokenState] = useState(null)

    //Sets the state of token to either the token in local storage or null\\
    useEffect(()=>{
        setTokenState(checkForToken())
    }, [])

    //Takes the user data and sends it to the login route where it's compared and if accurate returns a token to the user & if there is already a token it sets the variable token to the token in local storage\\
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

    //Takes the user data and sends it to the sign up route to be stored in the database\\
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

    //Resets the token variable to essentially nothing, removes the token from the users local storage and then sets the token's state to nothing\\
    const logout = () => {
        token = '';
        window.localStorage.removeItem('token');
        setTokenState(token)
    }

    //Conditional to change the body of the application based on the state of body\\
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
            <Header theme={theme} setTheme={setTheme} tokenState={tokenState} setBody={setBody} login={login} logout={logout} setFormData={setFormData} setMyPackage={setMyPackage} setUserData={setUserData} resetStates={resetStates}/> 
            {content()}
            <Footer />
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
