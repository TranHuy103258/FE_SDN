import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import UserHome from '../components/userHome/UserHome';
import Footerr from '../components/footer/Footer';
const UserHomePage = () => {

    return (
        <>
            <Header />
            <UserHome/>
            <Footerr/>

        </>
    );
};

export default UserHomePage;
