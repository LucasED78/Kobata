import React, { MouseEvent } from 'react';
import classes from './Backdrop.module.css';

export interface BackdropProps {
  children: JSX.Element;
  show: boolean;
  onBackdropClicked(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void;
}

const Backdrop = (props: BackdropProps) => {
  return (
    <div 
      style={{ opacity: +props.show }}
      className={classes.Backdrop}
      onClick={props.onBackdropClicked}>
        { props.children }
      </div>
  )
};

export default Backdrop;