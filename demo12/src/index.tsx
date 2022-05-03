import React from 'react';

const Btn = (props: { text: string }) => {
  return (
    <button>{props.text}</button>
  )
}

export const App = (props: { msg: string }) => {
  return (
    <div>
      <div>get msg: {props.msg}</div>
      <Btn text='hello world' />
    </div>
  )
}