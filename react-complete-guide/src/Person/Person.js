import React from 'react';

function person(props) {
    return (
        <div className='box'>
            <p>Hi, I'm <span className='bold'>{props.name}</span> and I'm {props.age} years old.</p>
            <p><input type='text' data-person={props.index}  onChange={props.changeName} value={props.name}/></p>
            <button onClick={props.remvoePersonHandler} data-person={props.index}>Remove Person</button>
        </div>
    )
}

export default person;