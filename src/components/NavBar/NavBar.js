import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    render() {
        
        return (
            <header>
                <nav>
                    <ul className="horizontal">
                        <li ><Link to="/">CRM</Link></li>
                        <li className="center"><Link to="/empresa">Empresas</Link></li>
                        <li className="center"><Link to="/cliente">Clientes</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}