import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <>
            <h1>Our Services</h1>
            <div className='services-container'>
                {
                    services.slice(0,6).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>    
    );
};

export default Services;