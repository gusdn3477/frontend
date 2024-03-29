import React, {useState} from 'react';
import BrandData from '../../../../db/nav.json';

export default function Brand(){

    const [ newBrand, setNewBrand ] = useState(BrandData);

    const brandList = newBrand.brand.map(item => (

        <div className="col-12 col-md-3">
            <div className="row">
                <div className="col-12 col-sm-4 brandImg"><i className={item.img}></i></div>
                <div className="col-12 col-sm-auto">
                    <p className="brandTitle">{item.name}</p>
                    <p className="brandTxt">{item.content}</p>
                </div>
            </div>
        </div>
    )).slice(0,4);

    return(
        <section id="brand">
            <div className="container">
                <div className="row">
                    {brandList}
                </div> 
            </div> 
        </section> 
    );
}