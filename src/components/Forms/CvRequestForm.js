import React, { Component } from 'react';
import Button from '../Utils/Button';
import styles from './messageform.module.scss';

class CvRequestForm extends Component {
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
            <div className={styles.Form__Container}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" onChange={this.handleChange} required />
                    <label htmlFor="company">Company Name</label>
                    <input name="company" type="text" onChange={this.handleChange} required />
                    <label htmlFor="email">Email Address</label>
                    <input name="email" type="email" onChange={this.handleChange} required />
                </form>
                <Button text="Request CV"></Button>
            </div>
        )
    }
}

export default CvRequestForm;