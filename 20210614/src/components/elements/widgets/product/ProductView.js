import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../ui/Rating';

export default function ProductView({categoryName}){

    const [newData, setnewData] = useState([]);

    const searchData = categoryName
    ? newData.filter(
        item => item.category.filter(single => single === categoryName)[0]
      )
    : newData;
    
    useEffect(() => {
        fetch("http://localhost:3001/product")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setnewData(data);
        })
        .catch(error => console.log(error));
    },[]);

    // const searchData = newData.filter(index => (
    //    index.category[0] === categoryName || index.category[1] === categoryName || index.category[2] === categoryName
    // ))
    const productList = searchData.map(item => (
        
            <div className="col-12 col-md-3 mb-4" key={item.id}>
                <Link to={`/productdetail/${item.id}`}><div className="productImg">{item.category}</div></Link>
                <p className="productTitle">{item.name}</p>
                <p className="productScore">
                {item.rating && item.rating > 0 ? (
                    <Rating ratingValue={item.rating} />
                ) : (
                ""
                )}
                </p>
                <p className="productPrice">{item.price}<span>{(item.price * ((100-item.discount)/100)).toFixed(2)}</span></p>
            </div>

    )).slice(0,8);

    return(
        <div className="row mt-5">
            {productList}
        </div>
        
    );
}