import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.css';

function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const NameHandler = (event) => {
        setName(event.target.value);
    }

    const RoomHandler = (event) => {
        setRoom(event.target.value);
    }

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input 
                            placeholder="Name" 
                            type="text" 
                            className="joinInput" 
                            onChange={ NameHandler } 
                    />
                </div>
                <div>
                    <input 
                            placeholder="Room" 
                            type="text" 
                            className="joinInput mt-20" 
                            onChange={ RoomHandler } 
                    />
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault(): null}
                      to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit"> 
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Join;