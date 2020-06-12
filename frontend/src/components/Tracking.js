import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            {props.myPackage ? `${props.myPackage.status}` : <div className="center"><div className="loader"></div></div>}
        </div>
    );
};