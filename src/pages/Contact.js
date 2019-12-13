import React from 'react';
import MiniHero from '../components/Elements/MiniHero';
import MessageForm from '../components/Forms/MessageForm';
import './mainpage.scss';

const Contact = () => {
    return (
        <div className="MainPage__Wrapper">
            <MiniHero image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <h1 className="Page__Heading">Contact Me</h1>
            <p className="Page__Heading_Subtext">Send me a message! This will send you an email and notify me of your message as soon as you send it.</p>
            <MessageForm />
        </div>
    )
}

export default Contact;