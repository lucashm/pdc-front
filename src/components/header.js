import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul className="Header-left">
                    <li>GASTRONOMIA</li>
                    <li>ACOMODAÇÕES</li>
                </ul>
                <div className="Header-center">
                    <p>PORTAL DO CORRENTE</p>
                </div>
                <ul className="Header-right">
                    <li>FOTOS</li>
                    <li>INFORMAÇÕES</li>
                </ul>
                <div>

                </div>
            </div>
        );
    }
}

export default Header;
