import React from 'react';
import "./Footer.css";

function Footer() {
    return (
            <footer id="footer">
                <ul className="icons">
                    <a href="#"><li><i className="fa fa-github" ></i><span className="label"> GitHub проекта</span></li></a>
                    <a href="#"><li><i className="fa fa-envelope" ></i><span className="label"> Напишите нам</span></li></a>
                    {/*<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>*/}
                    {/*<li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>*/}
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled. All rights reserved.</li>
                </ul>
            </footer>
    );
}

export default Footer;
