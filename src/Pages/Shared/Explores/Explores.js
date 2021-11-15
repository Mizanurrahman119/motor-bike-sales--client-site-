import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explores.css'

const Explores = () => {
    const [explores, setExplores]= useState([])

    useEffect(() =>{
        fetch('https://frozen-sierra-50215.herokuapp.com/explores')
            .then(res => res.json())
            .then(data => setExplores(data));
    },[]);

    const handleDelete = id => {
        const url = `https://frozen-sierra-50215.herokuapp.com/explores/${id}`;
        fetch (url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted !')
                const remaining = explores.filter(explore => explore._id !== id);
                setExplores(remaining);
            }
        })
    }
    return (
        <>
            <h1>Available Pruducts</h1>
            <div   className='explores-container'>
                {
                    explores.map(explore =><div className='Explore-container' key={explore._id}>
                        <img className='explores-image' src={explore.imgs} alt="" />
                         <h2 className='explores-content'>{explore.name}</h2>
                         <h3 className='explores-content'>{explore.cc}</h3>
                         <h4 className='explores-content'>Price: {explore.price}</h4>
                         <h5 className='explores-content'>{explore.details}</h5>
                         <Link to='/addedservice'>
                            <button className='explores-btn'>Service Add</button>
                         </Link>
                        <button className='explores-btn' onClick={() => handleDelete(explore._id)}>Delete</button>

                    </div>)
                }
            </div>    
        </>
    );
};

export default Explores;