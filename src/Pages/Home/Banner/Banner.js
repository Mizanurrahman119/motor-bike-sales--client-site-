import React from 'react';
import "./Banner.css"
import banner1 from "../../../banner-img/bike-banner.jpg";
// import banner2 from "../../../banner-img/bike-banner1.jpg";
// import banner3 from "../../../banner-img/bike-banner2.jpg";
import { Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Image style={{width:'100%', marginTop:'10px'}} src={banner1} fluid />
        </div>       
    );
};

export default Banner;