import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../deal/Deal';
import Blog from '../blog/Blog';

export default function Home() {
    return (
        <div id="wrap">
            <Header/>
            <Brand />
            <Deal />
            <Blog />
            <Footer />
        </div>
    );
}