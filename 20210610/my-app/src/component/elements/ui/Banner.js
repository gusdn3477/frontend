import React from 'react';

export default function Banner(){

    return(
        <>
            <div id="container">
                <div id="container-content">
                    <div style={{fontSize : "2.5rem"}}>Example headline</div>
                    <div>Some representative placeholder content for the first slide of the carousel.</div>
                    <button style={{width : "200px", height : "50px", backgroundColor:"blue"}}>Sign up today</button>
                </div>
            </div>
        </>
    )
}