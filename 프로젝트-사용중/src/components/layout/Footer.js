import React from 'react';

export default function Header(){
    return (
        <footer>
            <div classNameName="container-fluid" style={{padding : 0}}>
                <div classNameName="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <p className="footerLogo">The<br/><span>UNION</span><br/>Graphix</p>
                                <p className="copy">© 2021 TheUNIONGraphix .All Rights Reserved</p>
                            </div>
                            <div className="col-12 col-md-2">
                                <p className="menuTitle">ABOUT US</p>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Store location</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Orders tracking</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2">
                                <p className="menuTitle">USEFUL LINKS</p>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Store location</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Orders tracking</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2">
                                <p className="menuTitle">FOLLOW US</p>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Store location</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Orders tracking</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3">
                                <p className="menuTitle">SUBSCRIBE</p>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <input type="text" />
                                <p>SUBSCRIBE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}