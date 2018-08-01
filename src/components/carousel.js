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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={width} height={500} alt="500x500" src={ImgTwo} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={width} height={500} alt="500x500" src={ImgThree} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default CarouselPage;
