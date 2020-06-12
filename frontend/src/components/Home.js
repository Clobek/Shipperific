import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            <div className="app__body--content">
                <div className="app__body--content--input">
                    <label htmlFor="trackingNumber">Tracking Number:</label>
                    <input 
                    type="text"  
                    id="trackingNumber"
                    name="tracking_number"
                    value={props.formData.tracking_number}
                    onChange={props.handleChange}
                    required
                    />
                    <label htmlFor="carrier">Carrier:</label>
                    <input 
                    type="text" 
                    id="carrier"
                    name="carrier"
                    value={props.formData.carrier}
                    onChange={props.handleChange}
                    required
                    />
                </div>
                <div className="app__body--content--track">
                    <button type="submit" onClick={()=>{props.setBody('Tracking'), props.handleTrack()}}><i class="fas fa-box"></i><br/>Search</button>
                </div>        
            </div>
        </div>
    );
};