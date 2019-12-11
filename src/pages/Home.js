import React from 'react';
import Hero from '../components/Elements/Hero';
import CardSection from '../components/Elements/CardSection';
import content from '../data/projects.json';
import cats from '../data/projectCatagories.json';

const Home = props => {

    return (
        <React.Fragment>
            <Hero />
            <CardSection content={content} />
            <CardSection content={cats} />
        </React.Fragment>
    )
}

export default Home;