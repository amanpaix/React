import React from 'react';

const UserInput = (props) => {

    return (
        <div>
            <input type="text" onChange={props.changeInputHandler} value={props.username} />
        </div>
    )
}

export default UserInput;