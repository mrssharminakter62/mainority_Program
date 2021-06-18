import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './HomeMain.css'

const HomeMain = () => {
    return (
        <div className="first_page">
            <Header/>
            <Home/>
        </div>
    );
};

export default HomeMain;