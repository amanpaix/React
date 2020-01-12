import React from 'react';


const CharComponent = (props) => {
    let style = {
        display: 'inline-block',
        padding: '20px',
        textAlign: 'center',
        margin: '16px',
        border: '3px solid #000',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#fff'
    };

    let colors = [
        '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f'
    ];
    
    let random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

    style['backgroundColor'] = colors[random];

    return (
        <div style={style} data-index={props.index} onClick={props.removeBox}>
            {props.char.toUpperCase()}
        </div>
    );
}

export default CharComponent;
