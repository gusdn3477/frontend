import React, { useState } from 'react';
import Title from '../../../components/elements/ui/Title';
import TabMenu from '../../../components/elements/ui/TabMenu';
import ProductVIew from '../../../components/elements/widgets/product/ProductView';

export default function Deal(){

    const [ categoryName, setCategoryName ] = useState("fashion");
    console.log(categoryName);

    return(
        <section id="deal">
            <div className="container">
                <Title categoryName = {categoryName}></Title>
                <TabMenu 
                    setCategoryName = {setCategoryName}
                    categoryName = {categoryName}>    
                </TabMenu>
                <ProductVIew categoryName = {categoryName}></ProductVIew>
            </div>
        </section>
    )
}