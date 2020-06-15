import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            <div className="app__body--content">
                <div className="app__body--content--input">
                    <div className="top">
                        <label htmlFor="username">Username:</label>
                        <input 
                        type="text"  
                        id="username"
                        name="username"
                        onChange={props.handleUser}
                        required
                        />
                    </div>
                    <div className="bottom">
                        <label htmlFor="username">Password:</label>
                        <input 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={props.handleUser}
                        required
                        />
                    </div>
                </div>
                <div className="app__body--content--track">
                    <button type="submit" onClick={()=>{props.setBody('Home'), props.signUp()}}><i className="fas fa-user-plus"></i><br/>Sign Up</button>
                </div>        
            </div>
        </div>
    );
};