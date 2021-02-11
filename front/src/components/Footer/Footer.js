import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <>
        <footer id="footer" className="browser-default">
            <ul className="icons">
                    <li><a className="footer-icon" href="https://github.com/Sendoff74/automatic-octo-barnacle"><i className="fa fa-github"></i><span className="label"></span></a></li>
                    <li><a className="footer-icon" href="#"><i className="fa fa-envelope"></i><span className="label"></span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy;  2021 Toffee Team Elbrus.</li>
                <li>All rights reserved.</li>
            </ul>
        </footer>
        </>
    );
}

export default Footer;
