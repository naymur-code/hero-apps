import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
        const apps=useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <TrendingApps apps={apps}></TrendingApps>
        </div>
    );
};

export default Home;