import React from 'react'

const Welcome = (props) => {
    console.log(props);
  return (
    <h1>Hello: {props.name}</h1>
  );
}

export default Welcome