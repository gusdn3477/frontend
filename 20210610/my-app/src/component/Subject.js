import React, { useState, Fragment } from 'react';

export default function Subject(props){

  const [좋아요, 좋아요변경] = useState(0);
  const handleClick = ()=>{
    좋아요변경(좋아요+1);
  }

  return (
    <Fragment>
      <h1>React App {props.name} <span onClick = {handleClick}>좋아요</span>{좋아요}</h1>
      <h2>주소 {props.address}</h2>
      <p>PhoneNumber {props.children}</p>
    </Fragment>
  );
}