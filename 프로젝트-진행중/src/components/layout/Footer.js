import React, {useState} from 'react';
import FooterLogo from '../elements/ui/FooterLogo';
import FooterMenu from '../elements/ui/FooterMenu';
import FooterMenuData from '../../db/footermenu.json';

export default function Footer(){

    const [newFooterMenu, setNewFooterMenu] = useState(FooterMenuData);

    const footerDataList = newFooterMenu['ABOUT US'].map(item => (
        <FooterMenu footerMenuList={item}></FooterMenu>
    ))

    return (
        <footer>
            <div classNameName="container-fluid" style={{padding : 0}}>
                <div classNameName="footer">
                    <div className="container">
                        <div className="row">
                            <FooterLogo/>
                            <FooterMenu footerMenuList={newFooterMenu["ABOUT US"]} footerMenuTitle="ABOUT US"></FooterMenu>
                            <FooterMenu footerMenuList={newFooterMenu["FOLLOW US"]} footerMenuTitle="FOLLOW US"></FooterMenu>
                            <FooterMenu footerMenuList={newFooterMenu["USEFUL LINKS"]} footerMenuTitle="USEFUL LINKS"></FooterMenu>
                            <FooterMenu footerMenuList={newFooterMenu["SUBSCRIBE"]} footerMenuTitle="SUBSCRIBE"></FooterMenu>                            
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