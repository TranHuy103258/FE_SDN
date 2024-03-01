import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/slider/Carousel';
import CollaboratingArtists from '../components/collaboratingArtists/CollaboratingArtists';
import ProductCard from '../components/productCard/ProductCard';
import ShowAll from '../components/showAll/ShowAll';
import Footerr from '../components/footer/Footer';
const HomePage = () => {

    return (
        <>
            <Header />
            <Carousel />
            <div class="container">

                <CollaboratingArtists />
                <div class="row text-center khoi5">
                    <div class="col-xl-12">
                        <a href="" title="">Iphone</a>

                    </div>
                </div>
                <ProductCard />
                <ShowAll />
                <div class="row">
                    <div class="col-xl-12 khoi4">
                        <div class="anh4">
                            <img src="img/7.jpg" alt=""/>
                        </div>
                    </div>                   
                </div>
            </div>
            <Footerr/>

        </>
    );
};

export default HomePage;
