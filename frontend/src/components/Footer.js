import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__footer">
            <div className="code">
                <div className="code__content">
                    <a href="https://github.com/Clobek/Shipperific" target="_blank" rel="noopener noreferrer">Front-End</a>
                    <a href="https://github.com/Clobek/Shipperific_API" target="_blank" rel="noopener noreferrer">Back-End</a>
                </div>
                <a className="code__a" href="https://github.com/Clobek/Shipperific" target="_blank" rel="noopener noreferrer">CODE</a>
            </div>
             by Team Codarific:
            <a href="https://www.linkedin.com/in/bryce-belock/" target="_blank" rel="noopener noreferrer">Bryce Belock</a> /
            <a href="https://www.linkedin.com/in/jonathan-rhymes/" target="_blank" rel="noopener noreferrer">Jonathan Rhymes</a> /
            <a href="https://www.linkedin.com/in/taylor-yip/" target="_blank" rel="noopener noreferrer">Taylor Yip</a>
        </div>
    );
};
