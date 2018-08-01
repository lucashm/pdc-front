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
                <Card title='Indicações' img={Bridge} info='eai como vem' />
                <Card title='Gastronomia' img={Sushi} info='Este é um teste bem ousado se você parar pra pensar né po a vida é massa tipo pizza' />
                <Card title='Quartos' img={Room} info='OWOWOWOWOWO' />
                <Card title='Indicações' img={Church} info='wawwwaWOAOOOSSODKASOKDOKAQQQQQQQQQQQQQQ' />
            </div>
        );
    }
}

export default MainContent;
