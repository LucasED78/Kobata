import React from 'react';
import classes from './Modal.module.css';

export interface ModalProps {
  show: boolean;
  children: JSX.Element | string;
}

const Modal = (props: ModalProps) => {
  return (
    <div 
      className={[classes.Modal, props.show ? classes['Modal--open'] : classes['Modal--closed']].join(' ')}>
      { props.children }
    </div>
  )
}

export default Modal;