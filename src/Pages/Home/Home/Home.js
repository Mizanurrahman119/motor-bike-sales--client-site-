import React from 'react';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
        </div>
    );
};

export default Home;