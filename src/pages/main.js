import React, { Component } from 'react';
import CarouselPage from '../components/carousel';
import MainContent from '../components/mainContent';

class Main extends Component {
    render() {
        return (
            <div className="App">
                    <CarouselPage />
                    <MainContent />
            </div>
        );
    }
}

export default Main;
