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
                            <button type="submit" onClick={()=>{props.handleSave(), props.handlePackage(), document.getElementById('modal').style.display='none'}}>Save</button>
                        </div>
                    </div>
                </div>      
            </div>
            <div className="app__body--documents">
                {props.saved ? 
                props.saved.map((item, index)=>{
                    return(
                        <div className="app__body--documents--item" key={index}>
                            <div className="app__body--documents--item--name">Item Name: {item.item}</div>
                            <div className="app__body--documents--item--tracking">Tracking Number: {item.tracking_number}</div>
                            <div className="app__body--documents--item--carrier">Carrier: {item.carrier_code}</div>
                            <div className="app__body--documents--item--buttons">
                                <button onClick={()=>{document.getElementById(`key${index}`).style.display='block'}}>Update</button>
                                <button onClick={()=>{
                                    props.handleDelete(item._id), props.handlePackage()
                                }}>Delete</button>
                                <button onClick={()=>{props.setBody('Tracking'), props.handleSearch(item.tracking_number, item.carrier_code)}}>Search</button>
                            </div>
                            <div id={`key${index}`} className="app__body--documents--item--update" style={{display: 'none'}}>
                                <div className="app__body--documents--item--update--item">
                                <label htmlFor={`item${index}`}>Item Name:</label>
                                <input type="text" maxLength="30" name="item" id={`item${index}`} onChange={props.handleChange}/>
                                </div>
                                <div className="app__body--documents--item--update--tracking">
                                    <label htmlFor={`trackingNumber${index}`}>Tracking Number:</label>
                                    <input type="text" maxLength="30"  name="tracking_number" id={`trackingNumber${index}`} onChange={props.handleChange}/>
                                </div>
                                <div className="app__body--documents--item--update--carrier">
                                    <label htmlFor={`carrier${index}`}>Carrier:</label>
                                    <input type="text" maxLength="15" name="carrier" id={`carrier${index}`} onChange={props.handleChange}/>
                                </div>
                                <div className="app__body--documents--item--update--submit">
                                <button type="submit" onClick={()=>{props.handleUpdate(item._id), props.handlePackage(), document.getElementById(`key${index}`).style.display='none'}}>Save</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                : 
                <div className="app__body--documents--none">You do not have any packages saved.</div>}
            </div>
        </div>
    );
};