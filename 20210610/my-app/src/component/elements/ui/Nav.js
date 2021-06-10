import React from 'react';
import Title from './Title';
import Emoji from './Emoji';
import Option from './Option';

export default function Nav(){

    return(
        <div id="header">
            <Title></Title>
            <Option></Option>
            <Emoji></Emoji>
        </div>
    );
}