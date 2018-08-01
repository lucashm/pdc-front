import React, { Component } from 'react';
import Card from './card';
import Bell from '../lib/static/img/sino.png';

class MainContent extends Component {
    render() {
        return (
            <div className='CardWrapper'>
                <Card title='Indicações' img={Bell} info='eai como vem' />
                <Card title='Indicações' img={Bell} info='eai como vem' />
                <Card title='Indicações' img={Bell} info='eai como vem' />
                <Card title='Indicações' img={Bell} info='eai como vem' />
            </div>
        );
    }
}

export default MainContent;
