import React, { Component, Fragment, useState } from 'react';

export default function Navi() {

  let [urlName, setUrlName] = useState([
    '네이버',
    '다음',
    '페이스북',
    '인스타그램'
  ]);


  return (
    <Fragment>
      <nav>
        <ul>
          {
            urlName.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })
          }
        </ul>
      </nav>
    </Fragment>
  );
}