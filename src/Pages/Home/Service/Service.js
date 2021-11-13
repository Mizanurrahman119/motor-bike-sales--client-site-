import React from 'react';
import Manages from '../../Manages/Manages/Manages';
import './Service.css'

const Service = ({service}) => {
    const {name, details, cc, price, imgs} = service;

    const [purchaseOpen, setPurchaseOpen] = React.useState(false);
    const handleParchaseOpen = () => setPurchaseOpen(true);
    const handlePurchaseClose = () => setPurchaseOpen(false);
    return (
     <> 
        <div className='service-container'>
            <img className='service-image' src={imgs} alt="" />
            <h2 className='content'>{name}</h2>
            <h3 className='content'>{cc}</h3>
            <h4 className='content'>Price: {price}</h4>
            <h5 className='content'>{details}</h5>
            <button onClick={handleParchaseOpen} className='purchase-btn'>Purchase Now</button>
            
        </div>
        <Manages
        service={service}
        purchaseOpen={purchaseOpen}
        handlePurchaseClose={handlePurchaseClose}
        ></Manages>
      </>  
    );
};

export default Service;