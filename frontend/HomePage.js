import React from 'react';
import HomeImage from '../public/images/Home.png'; // Adjust the path accordingly

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our Website!</h1>
            <img src={HomeImage} alt="Home" />
            {/* Other content of your homepage */}
        </div>
    );
};

export default HomePage;
