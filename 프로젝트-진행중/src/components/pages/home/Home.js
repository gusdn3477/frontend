import React from 'react';
import Header from '../../../components/layout/Header';
import Brand from '../../../components/elements/widgets/brand/Brand';
import Deal from '../deal/deal';
import Blog from '../blog/Blog';
import Footer from '../../../components/layout/Footer';

export default function Home(){
    return(
        <div id="wrap">
        <Header/>
        <Brand />
        <Deal />
        <Blog />
        <Footer />
      </div>
    )
}