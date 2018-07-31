import React, { Component } from 'react';
import LogoName from '../lib/static/img/logo-name.png';
import LogoImg from '../lib/static/img/logo-img.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-top">
                    <img src={LogoImg} width='160px' className="Header-logoImg" />
                    <img src={LogoName} width='200px' style={{marginLeft: '30px'}} className="Header-logoName" />
                </div>
                <ul className="Header-bottom">
                    <li>GASTRONOMIA</li>
                    <li>ACOMODAÇÕES</li>
                    <li>FOTOS</li>
                    <li>OFERTAS</li>
                    <li>INFORMAÇÕES</li>
                </ul>
            </div>
        );
    }
}

export default Header;
