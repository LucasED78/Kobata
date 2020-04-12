import React, { MouseEvent, CSSProperties } from 'react';
import classes from './Button.module.css';

export interface ButtonProps {
  children: JSX.Element | string;
  style?: CSSProperties;
  disabled?: boolean;
  onClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      style={props.style}
      className={[classes.Button, props.disabled ? classes['Button--disabled'] : ''].join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}>

      { props.children }
    </button>
  )
};


export default Button;