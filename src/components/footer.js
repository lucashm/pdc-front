import React, { Component } from 'react';
import LogoName from '../lib/static/img/logo-name.png';
import LogoImg from '../lib/static/img/logo-img.png';
import Icon from 'react-fa';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: (new Date()).getFullYear()
        }
    }
    render() {
        return (
            <div className="Footer">
                <div className="Footer-title">
                    <h3> Hotel </h3>
                    <h2>Portal do Corrente</h2>
                    <div className="Footer-stars">
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                    </div>
                </div>
                <div className="Footer-followus">
                    <h4>Acompanhe também</h4>
                    <div className="Footer-followus-icons">
                        <Icon name="facebook" />
                        <Icon name="book" />
                    </div>
                </div>
                <div className="Footer-info">
                    <p>Santa Maria da Vitória - BA </p>
                    <p>Rua Jeremias Rodrigues da Silva, nº 750 </p>
                    <p>CEP: 47640-000 </p>
                    <p>Contato e reservas:</p>
                    <p>(77) 3483-3000 </p>
                    <p>{this.state.year}</p>

                </div>
            </div>
        );
    }
}

export default Footer;
