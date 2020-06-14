import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            <div className="app__body--saved" onClick={()=>{document.getElementById('modal').style.display='block'}}><i className="fas fa-save"></i></div>
            <div id="modal">
                <div className="modal">
                    <div className="modal__exit"><i className="far fa-times-circle" onClick={()=>{document.getElementById('modal').style.display='none'}}></i></div>
                    <div className="modal__form">
                        <div className="modal__form--item">
                        <label htmlFor="item">Item Name:</label>
                            <input type="text" maxLength="30" name="item" id="item" onChange={props.handleChange}/>
                        </div>
                        <div className="modal__form--tracking">
                            <label htmlFor="trackingNumber">Tracking Number:</label>
                            <input type="text" maxLength="30"  name="tracking_number" id="trackingNumber" onChange={props.handleChange}/>
                        </div>
                        <div className="modal__form--carrier">
                            <label htmlFor="carrier">Carrier:</label>
                            <input type="text" maxLength="15" name="carrier" id="carrier" onChange={props.handleChange}/>
                        </div>
                        <div className="modal__form--submit">
                            <button type="submit" onClick={()=>{props.setBody('Saved'), props.handleSave()}}>Save</button>
                        </div>
                    </div>
                </div>      
            </div>
            
        </div>
    );
};