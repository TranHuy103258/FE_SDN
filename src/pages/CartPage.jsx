import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Cart from '../components/cart/Cart';
import Footerr from '../components/footer/Footer';
const CartPage = () => {

    return (
        <>
            <Header />
            <Cart/>
            <Footerr/>

        </>
    );
};

export default CartPage;
