import React, { Component } from 'react';
import LogoName from '../lib/static/img/logo-name.png';
import LogoImg from '../lib/static/img/logo-img.png';
import ImgOne from '../lib/static/img/carousel1.jpg';
import ImgTwo from '../lib/static/img/carousel2.jpg';
import ImgThree from '../lib/static/img/carousel3.jpg';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Carousel } from 'react-responsive-carousel';
var Carousel = require('react-responsive-carousel').Carousel;


class CarouselPage extends Component {
    render() {
        let width = window.innerWidth *0.90;
        return (
            <div style={{ width: width, margin: '0 auto' }}>
                <Carousel showArrows={true}>
                    <div>
                        <img width={width} height={500} alt="500x500" src={ImgOne} />
                        <p className="newLegend">Hotel Portal do Corrente</p>
                    </div>
                    <div>
                        <img width={width} height={500} alt="500x500" src={ImgTwo} />
                    </div>
                    <div>
                        <img width={width} height={500} alt="500x500" src={ImgThree} />
                        <p className="newLegend">Pontos da cidade</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselPage;
