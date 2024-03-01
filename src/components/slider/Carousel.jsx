import React from 'react';
import './Carousel.css';
const Carousel = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div id="carouselExampleIndicators" class="col-xl-12 carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="img/1.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="img/2.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="img/1.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="img/1.webp" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Carousel;
