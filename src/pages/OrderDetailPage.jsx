import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import OrderDetail from '../components/orderDetail/OrderDetail';
import Footerr from '../components/footer/Footer';
const LoginPage = () => {

    return (
        <>
            <Header />
            <OrderDetail/>
            <Footerr/>

        </>
    );
};

export default LoginPage;
