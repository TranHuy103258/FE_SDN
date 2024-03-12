import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Footerr from '../components/footer/Footer';
const LoginPage = () => {

    return (
        <>
            <Header />
            <Login/>
            <Footerr/>

        </>
    );
};

export default LoginPage;
