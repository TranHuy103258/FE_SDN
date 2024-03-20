import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Cart from '../components/cart/Cart';
import Footerr from '../components/footer/Footer';
import { useLocation } from 'react-router-dom';
const CartPage = () => {
    // const location = useLocation();

    // const { productId, subProductId, quantity } = location.state;
    // console.log(productId)
    // console.log(subProductId)
    // console.log(quantity)

    return (
        <>
            <Header />
            <Cart  />
            <Footerr/>

        </>
    );
};

export default CartPage;
