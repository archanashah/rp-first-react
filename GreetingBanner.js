import React from 'react';

export default function(props) {
  return (
    <h1 className="App-title" data-tid={props['data-tid']}>Welcome to {props.companyName}</h1>
  )
}