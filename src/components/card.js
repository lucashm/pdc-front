import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <h1 className='Card-title'>{this.props.title}</h1>
                <img className='Card-img' src={this.props.img} />
                <a className='Card-button'>VER MAIS</a>
                <p className='Card-info'>{this.props.info}</p>
            </div>
        );
    }
}

export default Card;
