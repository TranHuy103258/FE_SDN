import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Product from '../components/product/Product';
import Footerr from '../components/footer/Footer';
const ProductPage = () => {

    return (
        <>
            <Header />
            <Product/>
            <Footerr/>

        </>
    );
};

export default ProductPage;
