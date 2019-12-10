import React from 'react';
import Hero from '../components/Elements/Hero';
import CardSection from '../components/Elements/CardSection';
import content from '../data/projects.json';

const Home = props => {

    return (
        <React.Fragment>
            <Hero />
            <CardSection content={content} />
        </React.Fragment>
    )
}

export default Home;