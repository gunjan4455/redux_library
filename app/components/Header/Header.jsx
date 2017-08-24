import React from "react";
import config from '../../config'
const { API: { protocols, domain , imagePath} } = config;

const Header = () => (
        <div className="bar">
            <div className="fixed-header">
                <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}library.png`} className="header-library"/> Library
            </div>
            <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}bar.jpg`} />
        </div>
);

export default Header