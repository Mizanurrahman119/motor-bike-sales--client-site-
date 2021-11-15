import React, { useEffect, useState } from 'react';
import './Offer.css'

const Offer = () => {
    const [offers, setOffers]= useState([])

    useEffect(() =>{
        fetch('https://frozen-sierra-50215.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    },[]);
    return (
        <>
            <h1>Favorite </h1>
            <div  className='offer-content'>
            {
                    offers.map(offer => <div key={offer._id}>
                        <img className='offer-image' src={offer.img} alt="" />
                         <h2>{offer.name}</h2>

                    </div>)
                }
            </div>
        </>
    );
};

export default Offer;