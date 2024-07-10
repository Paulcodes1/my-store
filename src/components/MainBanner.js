import React from 'react';
import './MainBanner.css';
import hero from '../assets/images/Hero.svg';

const MainBanner = () => (
    <div className="main-banner" style={{ backgroundImage: `url(${hero})` }}>
        <div className="banner-content text-center text-white">
            <h1>Where Style Meets Comfort</h1>
            <p>Join us to celebrate stylish, comfy wears. Your <br /> path to extraordinary style begins here.</p>
            <button className="btn btn-primary">Get started</button>
        </div>
    </div>
);

export default MainBanner;
