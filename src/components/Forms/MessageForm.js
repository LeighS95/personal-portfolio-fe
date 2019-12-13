import React, { Component } from 'react';
import Button from '../Utils/Button';

class MessageForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            fullName: '',
            companyName: '',
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        e.preventDefault();
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" onChange={this.handleChange} required />
                    <label htmlFor="company">Company Name</label>
                    <input name="company" type="text" onChange={this.handleChange} required />
                    <label htmlFor="email">Email Address</label>
                    <input name="email" type="email" onChange={this.handleChange} required />
                    <label htmlFor="message">Enter your message</label>
                    <textarea name="message"></textarea>
                </form>
                <Button type="submit" text="Submit"></Button>
            </React.Fragment>
        )
    }
}

export default MessageForm;