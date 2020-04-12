import React, { MouseEvent, CSSProperties } from 'react';
import classes from './Button.module.css';

export interface ButtonProps {
  children: JSX.Element | string;
  style: CSSProperties;
  onClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      style={props.style}
      className={classes.Button}
      onClick={props.onClick}>

      { props.children }
    </button>
  )
};


export default Button;