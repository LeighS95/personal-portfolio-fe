import React from 'react';
import MessageForm from '../components/Forms/MessageForm';

const Contact = () => {
    return (
        <React.Fragment>
            <div>
                <h1>Send your message</h1>
                <MessageForm />
            </div>
        </React.Fragment>
    )
}

export default Contact;