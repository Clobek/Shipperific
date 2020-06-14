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
            <div className="app__header--nav">
                    {props.tokenState ? 
                    <div className="app__header--nav--left">Saved</div> 
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
