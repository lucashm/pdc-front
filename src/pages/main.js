import React, { Component } from 'react';
import CarouselPage from '../components/carousel';
import MainContent from '../components/mainContent';
import Location from '../components/location';

class Main extends Component {



    render() {
        return (
            <div className="App">
                <CarouselPage />
                <MainContent />
                <Location />
            </div>
        );
    }
}

export default Main;
