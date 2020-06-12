import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    const [formData, setFormData] = React.useState({
        tracking_number: '',
        carrier: '',
    });
    return (
        <div className="app__header">
        <div className="app__header--name" onClick={()=>{
            props.setBody('Home'), setFormData()
        }}>Shipperific</div>
        </div>
    );
};
