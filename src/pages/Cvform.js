import React from 'react';
import MiniHero from '../components/Elements/MiniHero';
import CvRequestForm from '../components/Forms/CvRequestForm';
import './mainpage.scss';

const Contact = () => {
    return (
        <div className="MainPage__Wrapper">
            <MiniHero image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <h1 className="Page__Heading">How would you like to view my CV?</h1>
            <p className="Page__Heading_Subtext">View in browser or have it sent to your email?</p>

            <div>
                <CvRequestForm />
                <div>
                    <h2>OR view as a PDF?</h2>
                    <button>View CV</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;