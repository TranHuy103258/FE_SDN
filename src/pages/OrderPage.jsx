import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Order from '../components/order/Order';
import Footerr from '../components/footer/Footer';
const OrderPage = () => {

    return (
        <>
            <Header />
            <Order/>
            <Footerr/>

        </>
    );
};

export default OrderPage;
