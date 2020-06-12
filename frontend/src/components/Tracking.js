import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__body">
            {props.myPackage ? 
            <div className="package">
                <div className="package__tracking-number">Tracking Number: {props.myPackage.tracking_number}</div>
                <div className="package__carrier-code">Carrier: {props.myPackage.carrier_code.toUpperCase()}</div>
                <div className="package__status">Status: {props.myPackage.status}</div>
                <div className="package__container">
                    {props.myPackage.origin_info.trackinfo.map((item, index)=>{
                        return(
                            <div className="package__container--item" key={index}>
                                <div className="package__container--item--location">Location:<br/>{item.Details}</div>
                                <div className="package__container--item--status">Status:<br/>{item.StatusDescription}</div>
                                <div className="package__container--item--date">Date:<br/>{item.Date}</div>
                                <div className="package__container--item--checkpoint">Checkpoint:<br/>{item.checkpoint_status}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            : 
            <div className="center">
                <div className="loading"></div>
            </div>}
        </div>
    );
};