import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            <div className="app__body--content">
                <div className="app__body--content--input">
                    <div className="top">
                        <label htmlFor="trackingNumber">Tracking Number:</label>
                        <input 
                        type="text"  
                        id="trackingNumber"
                        name="tracking_number"
                        value={props.setFormData.tracking_number}
                        onChange={props.handleChange}
                        maxLength="30"
                        required
                        />
                    </div>
                    <div className="bottom">
                        <label htmlFor="carrier">Carrier:</label>
                        <input 
                        type="text" 
                        id="carrier"
                        name="carrier"
                        value={props.setFormData.carrier}
                        onChange={props.handleChange}
                        maxLength="15"
                        required
                        />   
                    </div>
                </div>
                <div className="app__body--content--track">
                    <button type="submit" onClick={()=>{props.setBody('Tracking'), props.handleTrack()}}><i className="fas fa-box"></i><br/>Search</button>
                </div>        
            </div>
        </div>
    );
};