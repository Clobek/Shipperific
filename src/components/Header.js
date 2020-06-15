import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__header">
            <div className="app__header--name" onClick={()=>{
                props.setBody('Home'), props.resetStates()
            }}>
            Shipperific
            </div>
            <div className="app__header--theme">
                {props.theme === 'light' ? <i className="fas fa-sun" onClick={()=>{props.setTheme('dark')}}></i> : <i className="fas fa-moon" onClick={()=>{props.setTheme('light')}}></i>}
            </div>
            <div className="app__header--nav">
                    {props.tokenState ? 
                    <div className="app__header--nav--left" onClick={()=>{props.resetStates(), props.setBody('Saved'), props.handlePackage()}}>Saved</div> 
                    : 
                    <div className="app__header--nav--left" onClick={()=>{props.setBody('Sign Up')}}>Sign Up</div>}
                    {props.tokenState ? 
                    <div className="app__header--nav--right"  onClick={()=>{props.logout()}}>Sign out</div> 
                    : 
                    <div className="app__header--nav--right" onClick={()=>{props.setBody('Sign In')}}>Sign in</div>}
            </div>
        </div>
    );
};
