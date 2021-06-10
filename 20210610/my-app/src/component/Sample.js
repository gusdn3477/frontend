import React, { useState, Fragment } from 'react';

export default function Sample(props){

  const [name, setName] = useState('mike');

  function handleClick(){
    
    let newName = name === 'mike' ? 'jane' : 'mike';
    setName(newName);
  }

  function showText(event){
    console.log(event.target.value);
  }

  return (
    <Fragment>
      <h1>Hello</h1>
      <h2>{name}</h2>
      <button onClick={() => {
        let newName = name === 'mike' ? 'jane' : 'mike';
        setName(newName);
      }}>ShowName</button>
      <input text="text" onChange = {(e) => {
        let newName = e.target.value;
        setName(newName);
      }}></input>
    </Fragment>
  );
}