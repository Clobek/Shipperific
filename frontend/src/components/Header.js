import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__header">
            <div className="app__header--name" onClick={()=>{
                props.setBody('Home'), props.setFormData(props.initial), props.setMyPackage(props.initial)
            }}>
            Shipperific
            </div>
            <div className="app__header--nav">
                <div className="app__header--nav--left">
                    {props.user ? <div>Saved</div> : <div className="app__header--nav--left--signUp" onClick={()=>{props.setBody('Sign Up')}}>Sign Up</div>}
                </div>
                <div className="app__header--nav--right">
                    {props.user ? <div>Sign out</div> : <div className="app__header--nav--left-signIn" onClick={()=>{props.setBody('Sign In')}}>Sign in</div>}
                </div>
            </div>
        </div>
    );
};
