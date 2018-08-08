import React, { Component } from 'react';
import Card from './card';
import Bridge from '../lib/static/img/pontesm2.jpg';
import Church from '../lib/static/img/igrejasm.jpg';
import Room from '../lib/static/img/carousel2.jpg';
import Sushi from '../lib/static/img/sushi.jpg';

class MainContent extends Component {
    render() {
        return (
            <div className='CardWrapper'>
                <Card title='Indicações' img={Bridge} info='Visite os pontos da cidade!' />
                <Card title='Gastronomia' img={Sushi} info='O melhor da gastronomia local' />
                <Card title='Quartos' img={Room} info='Consulte nossas opções' />
                <Card title='Indicações' img={Church} info='Visite os pontos da cidade!' />
            </div>
        );
    }
}

export default MainContent;
