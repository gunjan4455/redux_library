import React from "react";
import {Link} from 'react-router-dom';
import config from '../../config'
const { API: { protocols, domain , imagePath} } = config;

const Header = () => (
        <div className="bar">
            <div className="fixed-header">
                <Link to='/home'><img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}library.png`} className="header-library"/>TicTacToe</Link>
                <Link to='/scoreboard' className="scoreBoard-link">Scores</Link>

            </div>
            <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}TicTacToe.jpg`} />
        </div>
);

export default Header
