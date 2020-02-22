import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

import './messages.css';

function Messages( { messages, name }) {
    
    return(
        <ScrollToBottom>
            {messages.map((message, index) => {
                return(
                    <div key={ index }>
                        <Message message={ message } name={ name } />
                    </div>
                )
            })}
        </ScrollToBottom>
    )
}

export default Messages;