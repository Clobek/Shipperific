import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__header">
        <div className="app__header--name" onClick={()=>{
            props.setBody('Home')
        }}>Shipperific</div>
        </div>
    );
};
