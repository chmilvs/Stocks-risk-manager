import React from 'react';
import "./Footer.css";

function Footer() {
    return (
            <footer id="footer">
                <ul class="icons">
                    <a href="#"><li><i className="fa fa-github" ></i><span className="label"> GitHub проекта</span></li></a>
                    <a href="#"><li><i className="fa fa-envelope" ></i><span className="label"> Напишите нам</span></li></a>
                    {/*<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>*/}
                    {/*<li><a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>*/}
                </ul>
                <ul class="copyright">
                    <li>&copy; Untitled. All rights reserved.</li>
                </ul>
            </footer>
    );
}

export default Footer;
