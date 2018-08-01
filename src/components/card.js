import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <h1 className='Card-title'>{this.props.title}</h1>
                <img width={270} src={this.props.img} />
                <p>{this.props.info}</p>
            </div>
        );
    }
}

export default Card;
