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
            <a href="https://www.linkedin.com/in/bryce-belock/" target="_blank" rel="noopener noreferrer">Bryce Belock (Front-End+CSS)</a> /
            <a href="https://www.linkedin.com/in/jonathan-rhymes/" target="_blank" rel="noopener noreferrer">Jonathan Rhymes (Back-End+API)</a>
        </div>
    );
};
