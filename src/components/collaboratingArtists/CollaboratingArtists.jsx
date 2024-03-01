import React from 'react';
import './CollaboratingArtists.css';
import { useState, useEffect } from 'react';

const CollaboratingArtists = () => {
    useEffect(() => {
        const pt4 = document.querySelectorAll('.khoi4.p1');
        const trang4 = document.querySelectorAll('.trang4');

        for (let i = 0; i < pt4.length; i++) {
            pt4[i].addEventListener('mousemove', function (event) {
                trang4[i].classList.add('cd1');
                trang4[i].classList.remove('cd2');
            });

            pt4[i].addEventListener('mouseleave', function (event) {
                trang4[i].classList.remove('cd1');
                trang4[i].classList.add('cd2');
            });
        }

    }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render

    
    return (
        <div class="row">
            <div class="col-xl-4 khoi4 p1">
                <div class="trang4"></div>
                <div class="anh4">
                    <img src="img/2.jpg" alt="" />
                </div>

            </div>

            <div class="col-xl-4 khoi4 p1" id="nguoc">
                <div class="trang4"></div>

                <div class="anh4">
                    <img src="img/3.jpg" alt="" />
                </div>

            </div>

            <div class="col-xl-4 khoi4 p1">
                <div class="trang4"></div>

                <div class="anh4">
                    <img src="img/4.jpg" alt="" />
                </div>

            </div>

        </div>

    );
};

export default CollaboratingArtists;
