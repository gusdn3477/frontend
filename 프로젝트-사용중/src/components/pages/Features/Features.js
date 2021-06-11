import React from 'react';
import Brand from '../../elements/widgets/brand/Brand';
import Nav from '../../elements/ui/Nav';

export default function Features(){
    return(
        <div id="wrap">
            <div class="container-fluid" style={{padding : "8px"}}>
                <Nav/>
            </div>
        <Brand />
      </div>
    )
}