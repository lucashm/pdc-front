import React, { Component } from 'react';
import LogoName from '../lib/static/img/logo-name.png';
import LogoImg from '../lib/static/img/logo-img.png';
import ImgOne from '../lib/static/img/carousel1.jpg';
import ImgTwo from '../lib/static/img/carousel2.jpg';
import ImgThree from '../lib/static/img/carousel3.jpg';
import {Carousel} from 'react-bootstrap';
class CarouselPage extends Component {
    render() {
        let width = window.innerWidth*0.8;
        return (
            <div style={{width: width, margin: '0 auto'}}>
            <Carousel>
                <Carousel.Item>
                    <img  width={width} height={500} alt="500x500" src={ImgOne} />
                    <Carousel.Caption>
                        <h3>Hotel Portal do Corrente</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={width} height={500} alt="500x500" src={ImgTwo} />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={width} height={500} alt="500x500" src={ImgThree} />
                    <Carousel.Caption>
                        <h3>Pontos da cidade</h3>
                        <p>O melhor de Santa Maria!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default CarouselPage;
